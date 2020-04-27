# -*- coding: UTF-8 -*-
import os
import time
import random
from shortuuid import uuid
from pyspark import SparkContext, SparkConf, Row
from operator import add
from pyspark import Row
import json
from pyspark.sql import SparkSession

MYSQL_USER="root"
MYSQL_PWD="123456"
MYSQL_CONN="jdbc:mysql://localhost:3306/bigdata?useSSL=false&&characterEncoding=UTF-8"
MYSQL_DRIVER = "com.mysql.jdbc.Driver"

spark = SparkSession \
    .builder \
    .appName("Python Spark SQL basic example") \
    .config("spark.some.config.option", "some-value") \
    .getOrCreate()
sc = spark.sparkContext
conn_param={}
conn_param['user']=MYSQL_USER
conn_param['password']=MYSQL_PWD
conn_param['driver']=MYSQL_DRIVER

current_dir = os.path.dirname(os.path.realpath(__file__))
dirs=os.listdir('./data/')
video=[]
search=[]
bangumi=[]
for file in dirs:
    fi=open('./data/'+file,'r',encoding='UTF-8')
    js=json.loads(fi.read())
    if js['type']=='bangumi':
        bangumi+=js['data']
    elif js['type']=='video':
        video+=js['data']
    elif js['type']=='search':
        search+=js['data']
    fi.close()

videoRDD=sc.parallelize(video)
videoData=videoRDD.map(lambda data:(data['name'],1))
countVideo=videoData.reduceByKey(lambda x,y:x+y).map(
    lambda x:Row(name=x[0],num=x[1])
)

insertVideo=spark.createDataFrame(countVideo)
insertVideo.write.jdbc(MYSQL_CONN,'video','overwrite',conn_param)


bangumiRDD=sc.parallelize(bangumi)
bangumiData=bangumiRDD.map(lambda data:(data['name'],1))
countBangumi=bangumiData.reduceByKey(lambda x,y:x+y).map(
    lambda x:Row(name=x[0],num=x[1])
)

insertBangumi=spark.createDataFrame(countBangumi)
insertBangumi.write.jdbc(MYSQL_CONN,'bangumi','overwrite',conn_param)


searchRDD=sc.parallelize(search)
searchData=searchRDD.map(lambda data:(data['name'],1))
countSearch=searchData.reduceByKey(lambda x,y:x+y).map(
    lambda x:Row(name=x[0],num=x[1])
)

insertSearch=spark.createDataFrame(countSearch)
insertSearch.write.jdbc(MYSQL_CONN,'search','overwrite',conn_param)


print('finish')