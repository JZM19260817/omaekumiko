export const getInitialStateFromHTML = (html, index, type) => {
    const result = html.match(/<script>[\s\S]+?<\/script>/g);
    console.log('rt:',result);
    if (result) {
        const content = result[index].replace(/<script>([\s\S]+)<\/script>/, "$1");
        const ret=content.replace(`window.${type} = `, '').replace(`window.${type}=`, '');
        return ret;
    }
};

export default getInitialStateFromHTML;
