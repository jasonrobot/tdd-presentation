export function shorten( link ) {
    console.log(link);
    const linkUrl = new URL( link );
    const productIdPart = linkUrl.pathname.match( /\/(?:dp|gp\/product)\/([\w\d]+)/ );
    if ( productIdPart ) {
        const shortenedLink = new URL( linkUrl.toString() );
        shortenedLink.pathname = productIdPart[1];
        shortenedLink.search = '';
        shortenedLink.hostname = 'amzn.com';
        return shortenedLink;
    }
}
