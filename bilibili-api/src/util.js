export const getInitialStateFromHTML = (html, index, type) => {
    const result = html.match(/<script>[\s\S]+?<\/script>/g);
    if (result) {
        const content = result[index].replace(/<script>([\s\S]+)<\/script>/, "$1");
        const ret=content.replace(`window.${type} = `, '').replace(`window.${type}=`, '');
        console.log('ret:',content);
        return ret;
    }
};

export default getInitialStateFromHTML;
