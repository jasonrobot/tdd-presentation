import {
    shorten,
} from './shorten.js';

describe( 'shorten', () => {
    xit( 'should be callable', () => {
        shorten( '' );
    } );

    it( 'should shorten a link', () => {
        const testLink = 'https://www.amazon.com/Chon/dp/B07QRLNW9B?pf_rd_p=5cc0ab18-ad5f-41cb-89ad-d43149f4e286&pd_rd_wg=0YiVS&pf_rd_r=BBQGR1ZWZBMTFG2TZG4D&ref_=pd_gw_wish&pd_rd_w=yEzK2&pd_rd_r=56e3b574-f148-4f3e-9ab8-555ecf3de5cf';

        const expectedShortenedLink = new URL( 'https://amzn.com/B07QRLNW9B' );

        const actualShortenedLink = shorten( testLink );

        expect( actualShortenedLink.toString() )
            .toEqual( expectedShortenedLink.toString() );
    } );

    it( 'should shorten a book link', () => {
        const testLink = 'https://www.amazon.com/Stand-Zanzibar-Hugo-Award-Winning-Novel/dp/0765326787';

        const expectedShortenedLink = new URL( 'https://amzn.com/0765326787' );

        const actualShortenedLink = shorten( testLink );

        expect( actualShortenedLink.toString() )
            .toEqual( expectedShortenedLink.toString() );
    } );
} );
