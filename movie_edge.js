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
                rect: ['18px', '74px','514px','252px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"map.png",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['11.6%', '54.3%','75.9%','21.5%','auto', 'auto'],
                text: "ただの塾や予備校ではない。",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', \'ＭＳＰ明朝\', MS PMincho, serif', 15, "rgba(0,0,0,1)", "900", "none", ""]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['7.6%', '60.5%','84%','11%','auto', 'auto'],
                text: "プロのコーチングを通じて世界で活躍する人財へ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 15, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['18.6%', '39.5%','5.7%','11.3%','auto', 'auto'],
                text: "就",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['24.2%', '39.5%','4.3%','9.8%','auto', 'auto'],
                text: "活",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['27.6%', '39.5%','6.2%','11.3%','auto', 'auto'],
                text: "コ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text8',
                type: 'text',
                rect: ['32.2%', '39.5%','5.7%','8.5%','auto', 'auto'],
                text: "ー",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['36.2%', '39.5%','6.7%','10.3%','auto', 'auto'],
                text: "チ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text10',
                type: 'text',
                rect: ['42.2%', '39.5%','3.9%','7%','auto', 'auto'],
                text: "ン",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['46.4%', '39.5%','5%','7.8%','auto', 'auto'],
                text: "グ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text12',
                type: 'text',
                rect: ['51.5%', '39.5%','4.6%','9.8%','auto', 'auto'],
                text: "の",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text13',
                type: 'text',
                rect: ['54.9%', '39.5%','7.1%','12%','auto', 'auto'],
                text: "パ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text14',
                type: 'text',
                rect: ['60.2%', '39.5%','5.9%','14.8%','auto', 'auto'],
                text: "イ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text15',
                type: 'text',
                rect: ['63.8%', '39.5%','7.1%','11.3%','auto', 'auto'],
                text: "オ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text16',
                type: 'text',
                rect: ['69.5%', '39.5%','5%','13.8%','auto', 'auto'],
                text: "ニ",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text17',
                type: 'text',
                rect: ['71.3%', '39.5%','10.1%','13.3%','auto', 'auto'],
                text: "ア",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'imgres',
                type: 'image',
                rect: ['51px', '112px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres.jpg','0px','0px']
            },
            {
                id: 'imgres-1',
                type: 'image',
                rect: ['169px', '112px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-1.jpg','0px','0px']
            },
            {
                id: 'imgres-12',
                type: 'image',
                rect: ['398px', '112px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-12.jpg','0px','0px']
            },
            {
                id: 'imgres-13',
                type: 'image',
                rect: ['287px', '112px','100px','30px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-13.jpg','0px','0px']
            },
            {
                id: 'images-1',
                type: 'image',
                rect: ['51px', '159px','100px','31px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/images-1.jpg','0px','0px']
            },
            {
                id: 'imgres-2',
                type: 'image',
                rect: ['169px', '165px','100px','20px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-2.jpg','0px','0px']
            },
            {
                id: 'imgres-3',
                type: 'image',
                rect: ['287px', '163px','100px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-3.jpg','0px','0px']
            },
            {
                id: 'imgres-4',
                type: 'image',
                rect: ['398px', '163px','100px','23px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-4.jpg','0px','0px']
            },
            {
                id: 'imgres-6',
                type: 'image',
                rect: ['169px', '211px','100px','25px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-6.jpg','0px','0px']
            },
            {
                id: 'imgres-5',
                type: 'image',
                rect: ['51px', '213px','100px','21px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-5.jpg','0px','0px']
            },
            {
                id: 'imgres-8',
                type: 'image',
                rect: ['393px', '201px','111px','41px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-8.jpg','0px','0px']
            },
            {
                id: 'imgres-7',
                type: 'image',
                rect: ['287px', '213px','100px','22px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-7.jpg','0px','0px']
            },
            {
                id: 'imgres-11',
                type: 'image',
                rect: ['427px', '252px','48px','48px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-11.jpg','0px','0px']
            },
            {
                id: 'imgres-10',
                type: 'image',
                rect: ['287px', '258px','100px','35px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-10.jpg','0px','0px']
            },
            {
                id: 'imgres-9',
                type: 'image',
                rect: ['51px', '265px','100px','19px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/imgres-9.jpg','0px','0px']
            },
            {
                id: 'images',
                type: 'image',
                rect: ['169px', '256px','100px','40px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'animate/images/images.jpg','0px','0px']
            },
            {
                id: 'Text18',
                type: 'text',
                rect: ['79px', '46px','391px','55px','auto', 'auto'],
                text: "関西No.1の実績と満足度を誇る",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 23, "rgba(0,0,0,1)", "900", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['84px', '314px','391px','86px','auto', 'auto'],
                opacity: 0,
                text: "優良企業様サイバーエージェント様などにも<br>オフィシャルスポンサーになって頂いております",
                align: "center",
                font: ['\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif', 15, "rgba(0,0,0,1)", "900", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_imgres-8}": [
                ["style", "top", '161px'],
                ["style", "height", '41px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '393px'],
                ["style", "width", '111px']
            ],
            "${_imgres-4}": [
                ["style", "top", '123px'],
                ["style", "height", '23px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '398px'],
                ["style", "width", '100px']
            ],
            "${_Text15}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '11.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '63.82%'],
                ["style", "width", '7.1%']
            ],
            "${_imgres-1}": [
                ["style", "top", '72px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_imgres-9}": [
                ["style", "top", '225px'],
                ["style", "height", '19px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ],
            "${_Text2}": [
                ["style", "top", '55.76%'],
                ["style", "font-size", '15px'],
                ["style", "height", '11%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '7.64%'],
                ["style", "width", '84%']
            ],
            "${_imgres}": [
                ["style", "top", '72px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ],
            "${_imgres-10}": [
                ["style", "top", '218px'],
                ["style", "height", '35px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_images}": [
                ["style", "top", '216px'],
                ["style", "height", '40px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_imgres-5}": [
                ["style", "top", '173px'],
                ["style", "height", '21px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ],
            "${_Text18}": [
                ["style", "top", '36px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '79px'],
                ["style", "font-size", '23px']
            ],
            "${_Text4}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '11.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '18.55%'],
                ["style", "width", '5.68%']
            ],
            "${_imgres-11}": [
                ["style", "top", '212px'],
                ["style", "height", '48px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '427px'],
                ["style", "width", '48px']
            ],
            "${_Text10}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '7%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '42.18%'],
                ["style", "width", '3.9%']
            ],
            "${_imgres-6}": [
                ["style", "top", '171px'],
                ["style", "height", '25px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_Text9}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '10.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '36.18%'],
                ["style", "width", '6.74%']
            ],
            "${_Text7}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '11.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '27.64%'],
                ["style", "width", '6.21%']
            ],
            "${_Text11}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '7.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '46.36%'],
                ["style", "width", '4.97%']
            ],
            "${_Text3}": [
                ["style", "top", '266px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '84px']
            ],
            "${_Text5}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '9.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '24.18%'],
                ["style", "width", '4.26%']
            ],
            "${_imgres-2}": [
                ["style", "top", '125px'],
                ["style", "height", '20px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '169px'],
                ["style", "width", '100px']
            ],
            "${_imgres-7}": [
                ["style", "top", '173px'],
                ["style", "height", '22px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_imgres-3}": [
                ["style", "top", '123px'],
                ["style", "height", '23px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_images-1}": [
                ["style", "top", '119px'],
                ["style", "height", '31px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51px'],
                ["style", "width", '100px']
            ],
            "${_Text8}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '8.5%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '32.18%'],
                ["style", "width", '5.68%']
            ],
            "${_Text17}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '13.25%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '71.27%'],
                ["style", "width", '10.11%']
            ],
            "${_Text16}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '13.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '69.45%'],
                ["style", "width", '4.97%']
            ],
            "${_Text13}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '12%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '54.91%'],
                ["style", "width", '7.1%']
            ],
            "${_map}": [
                ["style", "top", '34px'],
                ["style", "height", '252px'],
                ["style", "opacity", '1'],
                ["style", "left", '18px'],
                ["style", "width", '514px']
            ],
            "${_Text}": [
                ["style", "font-weight", '900'],
                ["style", "left", '11.64%'],
                ["style", "width", '75.91%'],
                ["style", "top", '49.39%'],
                ["style", "text-align", 'center'],
                ["style", "height", '21.51%'],
                ["style", "font-family", '\'ヒラギノ明朝 Pro W3\', \'Hiragino Mincho Pro\', ＭＳＰ明朝, \'MS PMincho\', serif'],
                ["style", "opacity", '0.000000'],
                ["style", "font-size", '15px']
            ],
            "${_Text12}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '9.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '51.45%'],
                ["style", "width", '4.61%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "min-width", '300px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '330px'],
                ["style", "max-width", '900px'],
                ["style", "width", '550px']
            ],
            "${_imgres-13}": [
                ["style", "top", '72px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '287px'],
                ["style", "width", '100px']
            ],
            "${_imgres-12}": [
                ["style", "top", '72px'],
                ["style", "height", '30px'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '398px'],
                ["style", "width", '100px']
            ],
            "${_Text14}": [
                ["style", "top", '34.55%'],
                ["style", "font-size", '23px'],
                ["style", "height", '14.75%'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '60.18%'],
                ["style", "width", '5.85%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10750,
            autoPlay: true,
            timeline: [
                { id: "eid97", tween: [ "style", "${_imgres-11}", "opacity", '1', { fromValue: '0.000000'}], position: 8250, duration: 250 },
                { id: "eid66", tween: [ "style", "${_map}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid105", tween: [ "style", "${_imgres-7}", "opacity", '1', { fromValue: '0.000000'}], position: 8750, duration: 250 },
                { id: "eid16", tween: [ "style", "${_Text15}", "opacity", '1', { fromValue: '0.000000'}], position: 3750, duration: 250 },
                { id: "eid81", tween: [ "style", "${_Text15}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid109", tween: [ "style", "${_imgres-5}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 250 },
                { id: "eid89", tween: [ "style", "${_images-1}", "opacity", '1', { fromValue: '0.000000'}], position: 7750, duration: 250 },
                { id: "eid17", tween: [ "style", "${_Text16}", "opacity", '1', { fromValue: '0.000000'}], position: 4000, duration: 250 },
                { id: "eid73", tween: [ "style", "${_Text16}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid12", tween: [ "style", "${_Text11}", "opacity", '1', { fromValue: '0.000000'}], position: 2750, duration: 250 },
                { id: "eid72", tween: [ "style", "${_Text11}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid93", tween: [ "style", "${_imgres-6}", "opacity", '1', { fromValue: '0.000000'}], position: 8000, duration: 250 },
                { id: "eid118", tween: [ "style", "${_imgres-13}", "opacity", '1', { fromValue: '0.000000'}], position: 9500, duration: 250 },
                { id: "eid14", tween: [ "style", "${_Text13}", "opacity", '1', { fromValue: '0.000000'}], position: 3250, duration: 250 },
                { id: "eid68", tween: [ "style", "${_Text13}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid13", tween: [ "style", "${_Text12}", "opacity", '1', { fromValue: '0.000000'}], position: 3000, duration: 250 },
                { id: "eid79", tween: [ "style", "${_Text12}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid102", tween: [ "style", "${_imgres-2}", "opacity", '1', { fromValue: '0.000000'}], position: 8500, duration: 250 },
                { id: "eid101", tween: [ "style", "${_images}", "opacity", '1', { fromValue: '0.000000'}], position: 8500, duration: 250 },
                { id: "eid11", tween: [ "style", "${_Text10}", "opacity", '1', { fromValue: '0.000000'}], position: 2500, duration: 250 },
                { id: "eid80", tween: [ "style", "${_Text10}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid2", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '0.000000'}], position: 250, duration: 500 },
                { id: "eid67", tween: [ "style", "${_Text}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid90", tween: [ "style", "${_imgres-8}", "opacity", '1', { fromValue: '0.000000'}], position: 7750, duration: 250 },
                { id: "eid94", tween: [ "style", "${_imgres-3}", "opacity", '1', { fromValue: '0.000000'}], position: 8000, duration: 250 },
                { id: "eid98", tween: [ "style", "${_imgres-4}", "opacity", '1', { fromValue: '0.000000'}], position: 8250, duration: 250 },
                { id: "eid4", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0.000000'}], position: 500, duration: 500 },
                { id: "eid74", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid8", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0.000000'}], position: 1750, duration: 250 },
                { id: "eid70", tween: [ "style", "${_Text7}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid15", tween: [ "style", "${_Text14}", "opacity", '1', { fromValue: '0.000000'}], position: 3500, duration: 250 },
                { id: "eid78", tween: [ "style", "${_Text14}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid10", tween: [ "style", "${_Text9}", "opacity", '1', { fromValue: '0.000000'}], position: 2250, duration: 250 },
                { id: "eid76", tween: [ "style", "${_Text9}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid110", tween: [ "style", "${_imgres-12}", "opacity", '1', { fromValue: '0.000000'}], position: 9000, duration: 250 },
                { id: "eid114", tween: [ "style", "${_imgres-1}", "opacity", '1', { fromValue: '0.000000'}], position: 9250, duration: 250 },
                { id: "eid119", tween: [ "style", "${_imgres}", "opacity", '1', { fromValue: '0.000000'}], position: 9500, duration: 250 },
                { id: "eid115", tween: [ "style", "${_imgres-10}", "opacity", '1', { fromValue: '0.000000'}], position: 9250, duration: 250 },
                { id: "eid106", tween: [ "style", "${_imgres-9}", "opacity", '1', { fromValue: '0.000000'}], position: 8750, duration: 250 },
                { id: "eid9", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0.000000'}], position: 2000, duration: 250 },
                { id: "eid75", tween: [ "style", "${_Text8}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid126", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0.000000'}], position: 10250, duration: 500 },
                { id: "eid6", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0.000000'}], position: 1250, duration: 250 },
                { id: "eid71", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid122", tween: [ "style", "${_Text18}", "opacity", '1', { fromValue: '0.000000'}], position: 10000, duration: 500 },
                { id: "eid7", tween: [ "style", "${_Text5}", "opacity", '1', { fromValue: '0.000000'}], position: 1500, duration: 250 },
                { id: "eid77", tween: [ "style", "${_Text5}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 },
                { id: "eid18", tween: [ "style", "${_Text17}", "opacity", '1', { fromValue: '0.000000'}], position: 4250, duration: 250 },
                { id: "eid69", tween: [ "style", "${_Text17}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1000 }            ]
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
