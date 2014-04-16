/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'map',
                type: 'image',
                rect: ['18px', '25px','514px','252px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['11.6%', '46.3%','75.9%','21.5%','auto', 'auto'],
                text: "ただの塾や予備校ではない。",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif', 15, "rgba(0,0,0,1)", "900", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['7.6%', '52.7%','84%','11%','auto', 'auto'],
                text: "プロのコーチングを通じて世界で活躍する人財へ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 15, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['18.6%', '31.7%','5.7%','11.3%','auto', 'auto'],
                text: "就",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['24.2%', '31.7%','4.3%','9.8%','auto', 'auto'],
                text: "活",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['27.6%', '31.7%','6.2%','11.3%','auto', 'auto'],
                text: "コ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['32.2%', '31.7%','5.7%','8.5%','auto', 'auto'],
                text: "ー",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['36.2%', '31.7%','6.7%','10.3%','auto', 'auto'],
                text: "チ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['42.2%', '31.7%','3.9%','7%','auto', 'auto'],
                text: "ン",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['46.4%', '31.7%','5%','7.8%','auto', 'auto'],
                text: "グ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['51.5%', '31.7%','4.6%','9.8%','auto', 'auto'],
                text: "の",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['54.9%', '31.7%','7.1%','12%','auto', 'auto'],
                text: "パ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['60.2%', '31.7%','5.9%','14.8%','auto', 'auto'],
                text: "イ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text15',
                type: 'text',
                rect: ['63.8%', '31.7%','7.1%','11.3%','auto', 'auto'],
                text: "オ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text16',
                type: 'text',
                rect: ['69.5%', '31.7%','5%','13.8%','auto', 'auto'],
                text: "ニ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text17',
                type: 'text',
                rect: ['71.3%', '31.7%','10.1%','13.3%','auto', 'auto'],
                text: "ア",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'imgres',
                type: 'image',
                rect: ['51px', '63px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres.jpg','0px','0px']
            },
            {
                id: 'imgres-1',
                type: 'image',
                rect: ['169px', '63px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-1.jpg','0px','0px']
            },
            {
                id: 'imgres-12',
                type: 'image',
                rect: ['398px', '63px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-12.jpg','0px','0px']
            },
            {
                id: 'imgres-13',
                type: 'image',
                rect: ['287px', '63px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-13.jpg','0px','0px']
            },
            {
                id: 'images-1',
                type: 'image',
                rect: ['51px', '110px','100px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/images-1.jpg','0px','0px']
            },
            {
                id: 'imgres-2',
                type: 'image',
                rect: ['169px', '116px','100px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-2.jpg','0px','0px']
            },
            {
                id: 'imgres-3',
                type: 'image',
                rect: ['287px', '114px','100px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-3.jpg','0px','0px']
            },
            {
                id: 'imgres-4',
                type: 'image',
                rect: ['398px', '114px','100px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-4.jpg','0px','0px']
            },
            {
                id: 'imgres-6',
                type: 'image',
                rect: ['169px', '162px','100px','25px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-6.jpg','0px','0px']
            },
            {
                id: 'imgres-5',
                type: 'image',
                rect: ['51px', '164px','100px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-5.jpg','0px','0px']
            },
            {
                id: 'imgres-8',
                type: 'image',
                rect: ['393px', '152px','111px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-8.jpg','0px','0px']
            },
            {
                id: 'imgres-7',
                type: 'image',
                rect: ['287px', '164px','100px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-7.jpg','0px','0px']
            },
            {
                id: 'imgres-11',
                type: 'image',
                rect: ['427px', '203px','48px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-11.jpg','0px','0px']
            },
            {
                id: 'imgres-10',
                type: 'image',
                rect: ['287px', '209px','100px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-10.jpg','0px','0px']
            },
            {
                id: 'imgres-9',
                type: 'image',
                rect: ['51px', '216px','100px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-9.jpg','0px','0px']
            },
            {
                id: 'images',
                type: 'image',
                rect: ['169px', '207px','100px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/images.jpg','0px','0px']
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['79px', '27px','391px','55px','auto', 'auto'],
                text: "関西No.1の実績と満足度を誇る",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['84px', '261px','391px','86px','auto', 'auto'],
                text: "優良企業様サイバーエージェント様などにも<br>",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 15, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['109px', '281px','348px','23px','auto', 'auto'],
                text: "オフィシャルスポンサーになって頂いております",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 15, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text19',
                type: 'text',
                rect: ['10px', '310px','530px','31px','auto', 'auto'],
                text: "グローバル時代を見据え、留学、",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif', 18, "rgba(0,0,0,1)", "normal", "none", ""]
            },
            {
                id: 'Text22',
                type: 'text',
                rect: ['10px', '341px','530px','36px','auto', 'auto'],
                text: "海外インターンも企画・運営しているのは弊社のみ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 18, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'Text21',
                type: 'text',
                rect: ['-16px', '-48px','581px','31px','auto', 'auto'],
                text: "グローバルキャリア支援のワンストップサポート",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 22, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'sing',
                type: 'image',
                rect: ['-5px', '403px','303px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"sing.jpg",'0px','0px']
            },
            {
                id: 'Cebu-1',
                type: 'image',
                rect: ['141px', '65px','251px','170px','auto', 'auto'],
                opacity: 0,
                fill: ["rgba(0,0,0,0)",im+"Cebu-1.jpg",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_imgres-12}": [
                ["style", "top", '63px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '398px'],
                ["style", "width", '100px']
            ],
            "${_imgres-4}": [
                ["style", "top", '114px'],
                ["style", "height", '23px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '398px'],
                ["style", "width", '100px']
            ],
            "${_Text15}": [
                ["style", "top", '31.67%'],
                ["style", "width", '7.1%'],
                ["style", "height", '11.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '63.82%'],
                ["style", "font-size", '23px']
            ],
            "${_imgres-1}": [
                ["style", "top", '63px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_imgres-9}": [
                ["style", "top", '216px'],
                ["style", "height", '19px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ],
            "${_Text2}": [
                ["style", "top", '52.67%'],
                ["style", "width", '84%'],
                ["style", "height", '11%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '7.64%'],
                ["style", "font-size", '15px']
            ],
            "${_imgres}": [
                ["style", "top", '63px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ],
            "${_imgres-10}": [
                ["style", "top", '209px'],
                ["style", "height", '35px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_images}": [
                ["style", "top", '207px'],
                ["style", "height", '40px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_imgres-5}": [
                ["style", "top", '164px'],
                ["style", "height", '21px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ],
            "${_Text14}": [
                ["style", "top", '31.67%'],
                ["style", "width", '5.85%'],
                ["style", "height", '14.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '60.18%'],
                ["style", "font-size", '23px']
            ],
            "${_Text4}": [
                ["style", "top", '31.67%'],
                ["style", "width", '5.68%'],
                ["style", "height", '11.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '18.55%'],
                ["style", "font-size", '23px']
            ],
            "${_Text21}": [
                ["style", "top", '-48px'],
                ["style", "height", '31px'],
                ["style", "font-weight", '900'],
                ["style", "left", '-16px'],
                ["style", "font-size", '22px']
            ],
            "${_imgres-11}": [
                ["style", "top", '203px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '427px'],
                ["style", "width", '48px']
            ],
            "${_Text10}": [
                ["style", "top", '31.67%'],
                ["style", "width", '3.9%'],
                ["style", "height", '7%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '42.18%'],
                ["style", "font-size", '23px']
            ],
            "${_imgres-6}": [
                ["style", "top", '162px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_Text9}": [
                ["style", "top", '31.67%'],
                ["style", "width", '6.74%'],
                ["style", "height", '10.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '36.18%'],
                ["style", "font-size", '23px']
            ],
            "${_Text19}": [
                ["style", "top", '310px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px'],
                ["style", "height", '31px'],
                ["style", "font-family", '\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif'],
                ["style", "left", '10px'],
                ["style", "width", '530px']
            ],
            "${_Text7}": [
                ["style", "top", '31.67%'],
                ["style", "width", '6.21%'],
                ["style", "height", '11.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '27.64%'],
                ["style", "font-size", '23px']
            ],
            "${_Text11}": [
                ["style", "top", '31.67%'],
                ["style", "width", '4.97%'],
                ["style", "height", '7.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '46.36%'],
                ["style", "font-size", '23px']
            ],
            "${_Text3}": [
                ["style", "top", '261px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '84px']
            ],
            "${_Text5}": [
                ["style", "top", '31.67%'],
                ["style", "width", '4.26%'],
                ["style", "height", '9.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '24.18%'],
                ["style", "font-size", '23px']
            ],
            "${_imgres-2}": [
                ["style", "top", '116px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_imgres-7}": [
                ["style", "top", '164px'],
                ["style", "height", '22px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_Cebu-1}": [
                ["style", "top", '65px'],
                ["style", "height", '170px'],
                ["style", "opacity", '0'],
                ["style", "left", '141px'],
                ["style", "width", '251px']
            ],
            "${_Text22}": [
                ["style", "top", '341px']
            ],
            "${_sing}": [
                ["style", "top", '403px'],
                ["style", "height", '170px'],
                ["style", "left", '-5px'],
                ["style", "width", '303px']
            ],
            "${_imgres-3}": [
                ["style", "top", '114px'],
                ["style", "height", '23px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_Text18}": [
                ["style", "top", '27px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '79px'],
                ["style", "font-size", '23px']
            ],
            "${_imgres-8}": [
                ["style", "top", '152px'],
                ["style", "height", '41px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '393px'],
                ["style", "width", '111px']
            ],
            "${_Text17}": [
                ["style", "top", '31.67%'],
                ["style", "width", '10.11%'],
                ["style", "height", '13.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '71.27%'],
                ["style", "font-size", '23px']
            ],
            "${_Text16}": [
                ["style", "top", '31.67%'],
                ["style", "width", '4.97%'],
                ["style", "height", '13.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '69.45%'],
                ["style", "font-size", '23px']
            ],
            "${_Text13}": [
                ["style", "top", '31.67%'],
                ["style", "width", '7.1%'],
                ["style", "height", '12%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '54.91%'],
                ["style", "font-size", '23px']
            ],
            "${_Text6}": [
                ["style", "top", '281px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '109px'],
                ["style", "height", '23px']
            ],
            "${_map}": [
                ["style", "top", '25px'],
                ["style", "height", '252px'],
                ["style", "opacity", '1'],
                ["style", "left", '18px'],
                ["style", "width", '514px']
            ],
            "${_Text}": [
                ["style", "font-weight", '900'],
                ["style", "left", '11.64%'],
                ["style", "width", '75.91%'],
                ["style", "top", '46.33%'],
                ["style", "text-align", 'center'],
                ["style", "height", '21.51%'],
                ["style", "font-family", '\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif'],
                ["style", "font-size", '15px'],
                ["style", "opacity", '0.000000']
            ],
            "${_Text12}": [
                ["style", "top", '31.67%'],
                ["style", "width", '4.61%'],
                ["style", "height", '9.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51.45%'],
                ["style", "font-size", '23px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '300px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '300px'],
                ["style", "max-width", '900px'],
                ["style", "width", '550px']
            ],
            "${_imgres-13}": [
                ["style", "top", '63px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_Text8}": [
                ["style", "top", '31.67%'],
                ["style", "width", '5.68%'],
                ["style", "height", '8.5%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '32.18%'],
                ["style", "font-size", '23px']
            ],
            "${_images-1}": [
                ["style", "top", '110px'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6500,
            autoPlay: true,
            timeline: [
                { id: "eid97", tween: [ "style", "${_imgres-11}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid206", tween: [ "style", "${_imgres-11}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid66", tween: [ "style", "${_map}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid101", tween: [ "style", "${_images}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid207", tween: [ "style", "${_images}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid11", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0.000000'}], position: 1417, duration: 250 },
                { id: "eid80", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid105", tween: [ "style", "${_imgres-7}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid218", tween: [ "style", "${_imgres-7}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid2", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 500 },
                { id: "eid67", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid16", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0.000000'}], position: 1833, duration: 250 },
                { id: "eid81", tween: [ "style", "${_Text15}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid109", tween: [ "style", "${_imgres-5}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid211", tween: [ "style", "${_imgres-5}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid119", tween: [ "style", "${_imgres}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid201", tween: [ "style", "${_imgres}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid90", tween: [ "style", "${_imgres-8}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid209", tween: [ "style", "${_imgres-8}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid94", tween: [ "style", "${_imgres-3}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid203", tween: [ "style", "${_imgres-3}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid89", tween: [ "style", "${_images-1}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid215", tween: [ "style", "${_images-1}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid17", tween: [ "style", "${_Text16}", "opacity", '1', { fromValue: '0.000000'}], position: 1917, duration: 250 },
                { id: "eid73", tween: [ "style", "${_Text16}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid4", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 500 },
                { id: "eid74", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid106", tween: [ "style", "${_imgres-9}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid204", tween: [ "style", "${_imgres-9}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid12", tween: [ "style", "${_Text11}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 250 },
                { id: "eid72", tween: [ "style", "${_Text11}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid9", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 250 },
                { id: "eid75", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid15", tween: [ "style", "${_Text14}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 250 },
                { id: "eid78", tween: [ "style", "${_Text14}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid10", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0.000000'}], position: 1333, duration: 250 },
                { id: "eid76", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid122", tween: [ "style", "${_Text18}", "opacity", '1', { fromValue: '0.000000'}], position: 4500, duration: 500 },
                { id: "eid216", tween: [ "style", "${_Text18}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid102", tween: [ "style", "${_imgres-2}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid217", tween: [ "style", "${_imgres-2}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid98", tween: [ "style", "${_imgres-4}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid210", tween: [ "style", "${_imgres-4}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid110", tween: [ "style", "${_imgres-12}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid208", tween: [ "style", "${_imgres-12}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid13", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0.000000'}], position: 1583, duration: 250 },
                { id: "eid79", tween: [ "style", "${_Text12}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid14", tween: [ "style", "${_Text13}", "opacity", '1', { fromValue: '0.000000'}], position: 1667, duration: 250 },
                { id: "eid68", tween: [ "style", "${_Text13}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid118", tween: [ "style", "${_imgres-13}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid202", tween: [ "style", "${_imgres-13}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid181", tween: [ "style", "${_Text6}", "opacity", '1', { fromValue: '0.000000'}], position: 4750, duration: 500 },
                { id: "eid219", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid93", tween: [ "style", "${_imgres-6}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid213", tween: [ "style", "${_imgres-6}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid126", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0.000000'}], position: 4750, duration: 500 },
                { id: "eid212", tween: [ "style", "${_Text3}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid6", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 250 },
                { id: "eid71", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid8", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0.000000'}], position: 1167, duration: 250 },
                { id: "eid70", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid114", tween: [ "style", "${_imgres-1}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid214", tween: [ "style", "${_imgres-1}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid7", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0.000000'}], position: 1083, duration: 250 },
                { id: "eid77", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 },
                { id: "eid115", tween: [ "style", "${_imgres-10}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid205", tween: [ "style", "${_imgres-10}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 750 },
                { id: "eid18", tween: [ "style", "${_Text17}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 250 },
                { id: "eid69", tween: [ "style", "${_Text17}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7290059");
