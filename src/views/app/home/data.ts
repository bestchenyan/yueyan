interface RegionData {
    name: string;
    text: string;
    lon: number;
    lat: number;
    children: any[];
}
const regionList: RegionData[] = [
    {
        name: "shanghai",
        text: "上海",
        lon: 121.483531,
        lat: 31.271758,
        children: [
            {
                name: "luxunPark",
                text: "鲁迅公园",
                descript: "怀念与你的不期而遇;自从在鲁迅公园见到你;你的笑容便刻在了我的脑海里;挥之不去",
                lon: 121.483531,
                lat: 31.271758,
            },
            {
                name: "syLife",
                text: "上外生活",
                descript: "喜欢体育会路两旁的梧桐树;给炎热的夏天带来丝丝清凉;更喜欢跟你一起牵手漫步;无论冬夏，如沐春风",
                lon: 121.485414,
                lat: 31.278241,
            },
            {
                name: "syRiverSide",
                text: "上外河岸",
                descript: "闹市中的一隅;与你对酒当歌;波光粼粼的小河;代表着我对你的爱永不干涸",
                lon: 121.482542,
                lat: 31.277711,
            },
            {
                name: "quyangPark",
                text: "曲阳公园",
                descript: "曲径通幽，阳关三叠;想公园再大一些;能让我们多走一会儿",
                lon: 121.485585,
                lat: 31.286945,
            },
            {
                name: "hkFootBallStation",
                text: "虹口足球场",
                descript: "为什么我不想周日来这里;因为这里见证了太多分离;我想让我们到过的每一个地方;回忆起来都是开心的",
                lon: 121.480652,
                lat: 31.271136,
            },
            {
                name: "dnTulipPark",
                text: "大宁郁金香公园",
                descript: "那天我们再船上说了什么;已然不记得了;能想到的是;那天夕阳很美;泡泡很美;你很美",
                lon: 121.438226,
                lat: 31.275217,
            },
            {
                name: "wujiaochang",
                text: "五角场",
                descript: "那天不光你怂，我也怂了;好在我们玩小游戏玩的挺开心;不虚此行！;嗷嗷嗷嗷，还有;这里的饭也很好吃",
                lon: 121.515633,
                lat: 31.299927,
            },
            {
                name: "hanguoStreet",
                text: "韩国街",
                descript: "风车、麦田、炸鸡、烤肉、拉面、泡菜、啤酒...;我还想要小视频",
                lon: 121.373334,
                lat: 31.170158,
            },
            {
                name: "shSouthStation",
                text: "上海南站",
                descript: "每次都想在南站广场多坐一会儿;每次都想在地铁口多看你一眼",
                lon: 121.427558,
                lat: 31.154078,
            },
            {
                name: "zhujiajiao",
                text: "朱家角",
                descript: "疫情之下;能称得上说走就走的旅行;泛舟游于江南古镇;赏亭台楼阁，看落日余晖",
                lon: 121.055018,
                lat: 31.110211,
            },
            {
                name: "yulanyayuan",
                text: "御澜雅苑",
                descript: "我们在这里过生日、跨年、亲亲、抱抱……;这里有我们生活的点点滴滴;让我在偌大的城市中找到家的温暖",
                lon: 121.147039,
                lat: 31.154067,
            },
        ],
    },
    {
        name: "changsha",
        text: "长沙",
        lon: 112.968614,
        lat: 28.189923,
        children: [
            {
                name: "xjWestRoad",
                text: "湘江西路",
                descript: "首次自驾之旅;漫步湘江岸边;最美的风景不过是你眼中倒映下的那片星空",
                lon: 112.968614,
                lat: 28.189923,
            },
            {
                name: "chayanyuese",
                text: "茶颜悦色",
                descript: "停电也抵挡不住两名吃货的脚步;咦？你看，夕阳！;为什么我们遇到的夕阳都那么美？",
                lon: 112.987058,
                lat: 28.182293,
            },
        ],
    },
    {
        name: "jianli",
        text: "监利",
        lon: 112.906496,
        lat: 29.847302,
        children: [
            {
                name: "jlBusStation",
                text: "监利汽车站",
                descript: "2021年2月20日;时隔148天;我们再次相见;人行道上，你对我伸出小手;那是我第一次拉你的手;软软的，有点凉",
                lon: 112.906496,
                lat: 29.847302,
            },
        ],
    },
    {
        name: "wuhan",
        text: "武汉",
        lon: 114.260073,
        lat: 30.446246,
        children: [
            {
                name: "xiangshuiwan",
                text: "香水湾",
                descript: "不能说是我们在武汉的家;仿佛有种陌生感;住的越久，越陌生",
                lon: 114.260073,
                lat: 30.446246,
            },
            {
                name: "hkRiverBeach",
                text: "汉口江滩",
                descript: "妹妹是不喜欢走动的;江滩却去了两次;大武汉的灯光不输上海吧;那次意外地走错;却欣赏了不一样的风景",
                lon: 114.31124,
                lat: 30.598637,
            },
            {
                name: "wansongyuan",
                text: "万松园",
                descript: "我对武汉印象一直不太好;万松园是个例外;每次都想带你去尝尝不一样的;可惜你来的次数太少;还是老样子比较稳妥;老街烧烤来一套",
                lon: 114.267976,
                lat: 30.592581,
            },
            {
                name: "jinronggang",
                text: "金融港",
                descript: "你来的不多;我都记得;跟你一起下班是多么美好",
                lon: 114.425296,
                lat: 30.456019,
            },
        ],
    },
];
const category = {
    luxunPark: {
        name: "luxunPark",
        text: "鲁迅公园",
        imgList: [
            "luxunPark/04E9F26B4DB4D02A83E5B4136CD0676C.png",
            "luxunPark/0DB6C79A92E41B794E6B32C67CC5A7A5.png",
            "luxunPark/0DF5DFD51606F10D23BB49422E5B6AF9.png",
            "luxunPark/1B65529A4406F11F5C078EE96A3B78D0.png",
            "luxunPark/2C1414382810EE54E924D381C38D0F1C.png",
            "luxunPark/2DDFE97B0F04AC044FA136CAF657CE0E.png",
            "luxunPark/453620AEB91B491C17C1D506F2E6A8D3.png",
            "luxunPark/51C97B4E4EF25980CF57779FD6BF4A18.png",
            "luxunPark/533910B0446D1E88AC2643647E884D4F.png",
            "luxunPark/5557256D449E1147BB5C39289F3B9EFE.png",
            "luxunPark/570FB54F1BE79E8C269A7E950B0121EC.png",
            "luxunPark/6DE1DEDD0E6330D62CDA6E05C1D764F6.png",
            "luxunPark/A0DE48093EB27B5F1812AFDA52C9FA77.png",
            "luxunPark/A782CC5508A5753F41D62007ACE4A81A.png",
            "luxunPark/A985A42098214CB0D3BA3C1F6794BE4C.png",
            "luxunPark/AB281A66F85F1E5C6D3EBE900B2816D6.png",
            "luxunPark/ACE2288165EAFDE5F5A28B5BE7628414.png",
            "luxunPark/CEF29C02B9138D6C4A8ADD86E32FEC57.png",
            "luxunPark/E81E3FE309903D0483B48B68B8D8ED64.png",
            "luxunPark/ED1BA495B61409E9A96638D5DBC0EE79.png",
            "luxunPark/FBA30A4D3B7C3BEAD1D86BED99CABEF0.png",
            "luxunPark/FF91E345F76198786FF23AF8E4DB5AF2.png",
        ],
        videoList: [
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/luxunPark/2021-04-03%20133455.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/luxunPark/2021-04-03%20134600.mp4",
        ],
    },
    syLife: {
        name: "syLife",
        text: "上外生活",
        imgList: [
            "syLife/035DCCD0EA273991A62241E65B662885.png",
            "syLife/0B84A3E2F1701B15117711FC80A27AC3.png",
            "syLife/0C3D7B08F6419253E39F84CC9FEEC8C4.png",
            "syLife/0CC75DE9942451D333C17062DA879991.png",
            "syLife/0DA61E33EF3ABEB47128CB895ED4BC8B.png",
            "syLife/1481426A740023AA5353DEDCA9F2D6DF.png",
            "syLife/1B0BCDEDE6BA0215EE7EE6B466A3D5BD.png",
            "syLife/226189FC41D6FA00F2F7A98B95FD9C28.png",
            "syLife/2CB913E28D2C341F8A916F4F3088EB30.png",
            "syLife/37616BF6E65521CA93AE36895DA25D74.png",
            "syLife/436C86A0DCF81BC16D6684DCC15163AF.png",
            "syLife/4EB86243F64A4AB3AD9A63FD0CCF8828.png",
            "syLife/644D9299AFC91EB69C498E15BD676378.png",
            "syLife/809CE23A1DA34A8D2356F9F985169991.png",
            "syLife/81C057BC0A550946457E3CDF369BB098.png",
            "syLife/96EC30AA521CF4E1147A9BA11E9F51F9.png",
            "syLife/9ABDF87F808DCAC2D3B764E5A81E7778.png",
            "syLife/A0C989E8D7D938BA3B5BBFF20CAC9EA1.png",
            "syLife/A8DEC61393A6DD28454B8F994DE47903.png",
            "syLife/B71BFF2481C245A0AB7F0F3D24C73CE6.png",
            "syLife/BC3344556DCADDA619C643AE08980E35.png",
            "syLife/C3181D6FD303B6E85E3D14E5917597E5.png",
            "syLife/D1FDB919262CE2A23FB2276881B92CA3.png",
            "syLife/D20E2A86D2AA864F7FA1525A42C0012B.png",
            "syLife/DAF0C8084916210AA28999A2C08173CE.png",
            "syLife/DEF706D580160F73D8C18DD3242A62ED.png",
            "syLife/FDD783BC79A98481D93475992FB2F196.png",
        ],
        videoList: [],
    },
    syRiverSide: {
        name: "syRiverSide",
        text: "上外河岸",
        imgList: [
            "syRiverSide/0FF1712B78395FBEC75681C8E315B548.png",
            "syRiverSide/443F004C2830646914E6626EBE9AB5A4.png",
            "syRiverSide/53C0B9379096E38CE63D8A5886704B59.png",
            "syRiverSide/5DFC32E21BBB8518AF730759CAEB0575.png",
            "syRiverSide/71A1F19A83360570516A030154F3DF9C.png",
            "syRiverSide/916987C07FDEA45986DEB9BDA9D30EB6.png",
            "syRiverSide/9E86CDE02C99886323CA6C4F5A025285.png",
            "syRiverSide/9F226268FAEE15AC44971893B296DDF1.png",
            "syRiverSide/A9BFDBC77860B3A271DF9A21EF07562D.png",
            "syRiverSide/AF6EBA93C45EA7B41CDEB37263F3350E.png",
            "syRiverSide/C2B0A14DC20FBD6C57647F8A0EC445E0.png",
            "syRiverSide/C6B8AF04111B30859062C7D3DC00F28C.png",
            "syRiverSide/CD77CC411F5556EB19C343B6F80ACABC.png",
            "syRiverSide/D65796DE9F57AF9ED736C35F153DEA3B.png",
            "syRiverSide/DE338A5225F947B79105C740333F2D6F.png",
            "syRiverSide/E8B47B0EE82D1585CD17FE261ADB5F5A.png",
            "syRiverSide/EF57769F9779D5F93AA69AC17724B926.png",
            "syRiverSide/EFB407ECF29C5F6569870D9CE76C2B15.png",
        ],
        videoList: [],
    },
    quyangPark: {
        name: "quyangPark",
        text: "曲阳公园",
        imgList: [
            "quyangPark/605A2DD8851A42A922631333E5A57EFB.png",
            "quyangPark/C7841BF6300AF08F1F434D61C3264E58.png",
            "quyangPark/DC25F68953B8564C4EA7C36BE5C3693F.png",
            "quyangPark/E485527B99FA2BF918226579DE2FD348.png",
            "quyangPark/E58683F4A203E43BF01E610A91ACF788.png",
        ],
        videoList: [],
    },
    hkFootBallStation: {
        name: "hkFootBallStation",
        text: "虹口足球场",
        imgList: [
            "hkFootBallStation/1D4E31FD07102997341E2271F9AA41B7.png",
            "hkFootBallStation/2FD2AFBB3ADAF8FB40B18B549F9511A8.png",
            "hkFootBallStation/4367D269B25AEA97DAE1C1C1BDCD03E5.png",
            "hkFootBallStation/656A1AF7A8900B54DC7BCF4E83AD4D5C.png",
            "hkFootBallStation/6C74FFEC9024EBF1C115B29C3D417E61.png",
            "hkFootBallStation/83F77102E2944A0AF8C742602725AC32.png",
            "hkFootBallStation/918AF44676B55164086D867FED2EF012.png",
            "hkFootBallStation/99A276C80BA18E5ED2EA1C49D40D7386.png",
            "hkFootBallStation/A0D4A429D8F6B5232A3AE912FDAD37F3.png",
            "hkFootBallStation/AA06509A3CC2172AECE02A6D17EEA0FC.png",
            "hkFootBallStation/B11FA9B179E038FABAE778BF667116A2.png",
            "hkFootBallStation/B5BB146AE0ED6AB846C421E6384EDF46.png",
            "hkFootBallStation/CBF89CF34CB96E43D248089E7309FF58.png",
        ],
        videoList: [],
    },
    dnTulipPark: {
        name: "dnTulipPark",
        text: "大宁郁金香公园",
        imgList: [
            "dnTulipPark/2124EB9FBD9DF2C8DCA2E303614F8E2C.png",
            "dnTulipPark/2C99A0D026809D3373EB3707379147FE.png",
            "dnTulipPark/30C5591159289D19286131E5B77D3BA1.png",
            "dnTulipPark/46A5C1EA2125BA3E1AD07ECE6B9293F8.png",
            "dnTulipPark/AFDA85E57B1CE042A16638DAC4FD05E7.png",
            "dnTulipPark/B46C046AD65B98FC2933AAE66194F5EF.png",
            "dnTulipPark/D33441AB69122AB6423783D3AEA78A83.png",
            "dnTulipPark/D8A0730ACF4F9F56D9C28827D2CA418C.png",
            "dnTulipPark/DC51A003648B1EB9DA9E0CE18F000B84.png",
            "dnTulipPark/DF374308447968FF68F7CFFEF5B6CB3B.png",
        ],
        videoList: [],
    },
    wujiaochang: {
        name: "wujiaochang",
        text: "五角场",
        imgList: [
            "wujiaochang/4317109202F0CAC3B417AE345E91C6E3.png",
            "wujiaochang/7435DBC8E58553D3A90789BF6D7D5810.png",
            "wujiaochang/8EB06D13622459EEFE59AFFB7A41E2C8.png",
            "wujiaochang/9D69CBE363702C2123CD0C0330465F0E.png",
            "wujiaochang/A2135F6A12FEEF3A9CE75BAB817A482B.png",
            "wujiaochang/A3DFF89900CE52535A76D27B06999388.png",
            "wujiaochang/ABCCFE8E486D0085C433B6B46EE0FFF7.png",
            "wujiaochang/ACDEBDF2D6133D86A7353B18FD8C7FC3.png",
        ],
        videoList: [
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/wujiaochang/2021-05-31%20163454.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/wujiaochang/2021-05-31%20163526.mp4",
        ],
    },
    hanguoStreet: {
        name: "hanguoStreet",
        text: "韩国街",
        imgList: [
            "hanguoStreet/05611DB1034944523D3AEBFF3266FFA3.png",
            "hanguoStreet/092169ED412FBBB122DF0017131B8B2A.png",
            "hanguoStreet/0ABA1A8CB80BC9615A01761546EDB16E.png",
            "hanguoStreet/11DCCBBCA9C959FF7957E106BA8EFFEA.png",
            "hanguoStreet/12D0910915754F34071DE44E5303D04C.png",
            "hanguoStreet/19DBA0716E49273EE3D60171A978B5C5.png",
            "hanguoStreet/22F2C260EA374558F85FFDFFD72E6A1F.png",
            "hanguoStreet/2DC8476D71B1656E5804AE50DBC6AAB2.png",
            "hanguoStreet/2F87B72348D2938C66C7FFFC62780E9F.png",
            "hanguoStreet/3189FA1A87B17CA1AE957083DDC043DA.png",
            "hanguoStreet/4C7C964A8C0C567A0307987FA12BBCCF.png",
            "hanguoStreet/4EF16861140B3C8F902A6A8CFD08F6BF.png",
            "hanguoStreet/50A6F0F57E406739483222486780BA03.png",
            "hanguoStreet/5F2A8FE73411FB959C924F861AB66ADF.png",
            "hanguoStreet/64AB380BC4B4677F6D7CBED43D30BCBF.png",
            "hanguoStreet/72C75312DACDEBACB58FB665F005FAD3.png",
            "hanguoStreet/7943F6E1DD48E070B10BA11D12BE3C8F.png",
            "hanguoStreet/B2EEC435D00042292373C629553A5200.png",
            "hanguoStreet/BB2F47F4B952DA725D1FC5F84485006D.png",
            "hanguoStreet/C6676B01C90509143F7D8A1D4AF94A9B.png",
            "hanguoStreet/C735353599D111AE7B434DDCA0C5C9B3.png",
            "hanguoStreet/CA95562E4D6284923B2561D527410730.png",
            "hanguoStreet/CDCE07BDDDDF9E2D6097F82C150F4E23.png",
            "hanguoStreet/D4AC00CBA555F63FE6F0AA4715799ED4.png",
            "hanguoStreet/DD974CE70F207F89C6E092599FE3F370.png",
            "hanguoStreet/FA1F6889560CBF0EDC9CB3C62309CF9B.png",
            "hanguoStreet/FD7D55E19E0257FE152C23695206DB88.png",
        ],
        videoList: [
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/hanguoStreet/134280.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/hanguoStreet/2021-05-29%20210119.mp4",
        ],
    },
    shSouthStation: {
        name: "shSouthStation",
        text: "上海南站",
        imgList: [
            "shSouthStation/078DE2A3896F314414C25B67FA7653AC.png",
            "shSouthStation/0C41807DF32A3D4A78F246091B1D3B1E.png",
            "shSouthStation/373994334419D0EAB9BD0AD91F0F67FA.png",
            "shSouthStation/A8C4399728B645D3871DA6479823D25B.png",
        ],
        videoList: [],
    },
    zhujiajiao: {
        name: "zhujiajiao",
        text: "朱家角",
        imgList: [
            "zhujiajiao/0688D0B7486B1700C6333328B147B2D4.png",
            "zhujiajiao/07CC1725C1FABCA70DA60954FED7076C.png",
            "zhujiajiao/1066FD24D3A583FDE454DAD3082F1DB0.png",
            "zhujiajiao/12A1DCC628FDEB721B336B62F39CC7FE.png",
            "zhujiajiao/200787820DA4AEE7287234004AB30864.png",
            "zhujiajiao/24C5FF91CD4689858E55DEC3314259D6.png",
            "zhujiajiao/3589C3613633455B946E9E98EA5F65B3.png",
            "zhujiajiao/385A1EB2002A19FC64814441B8B0B260.png",
            "zhujiajiao/39C3E1FA3A07F12369A5EC32BB723507.png",
            "zhujiajiao/3FF5A6C0FE8CB535C0A0045F9D32386B.png",
            "zhujiajiao/452BE288F918794250C26160A4C46FFF.png",
            "zhujiajiao/4AAB9B60A19C64A351B940D1E98AA2B8.png",
            "zhujiajiao/4C8B4EBF78485486D9379128D4A49E54.png",
            "zhujiajiao/53417FC22D8C79C8A34EA02EC26F776C.png",
            "zhujiajiao/5E812F8C1B886078A6489CD890919049.png",
            "zhujiajiao/5FC9D85C69E3F9D2CEC47493E2C061E5.png",
            "zhujiajiao/63707F95E2FE37911B1AA6B29DC95EC2.png",
            "zhujiajiao/884A1FCFC5AF3301AA992D9C83633738.png",
            "zhujiajiao/976148E8F863BBAF8713FE553A281BC3.png",
            "zhujiajiao/B27AFC041628FD77740C4DD879A3FBC2.png",
            "zhujiajiao/B5BA296AD7FD9C25A30086B4C38C3197.png",
            "zhujiajiao/BD3E5F3BA55558ED8785D19CA0526479.png",
            "zhujiajiao/BF0014DA1A0D525B01558F8E86E24820.png",
            "zhujiajiao/CB95E45A303B8CDFC3CC5C5D6E5CB7E6.png",
            "zhujiajiao/CD46C950468092C8D8BF7C4D023CF81E.png",
            "zhujiajiao/D679FF23BC2E2DE6E3FA922BC80001B0.png",
            "zhujiajiao/DBC76EE10144939A2227753B0553FF56.png",
            "zhujiajiao/DFEB43AD9A7E46AC88003A7333FFF212.png",
            "zhujiajiao/E6F2582E6CB7FEF13D16829109CCE18C.png",
            "zhujiajiao/EFB3446464D93E4094D8AF0E9722D6B4.png",
            "zhujiajiao/FB1AAE05D6550ECC4520EC428780FEF3.png",
        ],
        videoList: [],
    },
    yulanyayuan: {
        name: "yulanyayuan",
        text: "御澜雅苑",
        imgList: [
            "yulanyayuan/04CF52AB1E3AFA3622C6775A79920B53.png",
            "yulanyayuan/055DAB3BAABF676609D241BEF84E367A.png",
            "yulanyayuan/0577A724D79057DE0C8E7D63A245C6B0.png",
            "yulanyayuan/05B3A67C55B2C7A4E2BE884AA4EAA6E7.png",
            "yulanyayuan/0CC7C102557D8D7E9E712992E4E83FB7.png",
            "yulanyayuan/0CCE42CD7EFA0052C52862BDF9AE4866.png",
            "yulanyayuan/0D7FD6867E67DFB833F336211A6C04C3.png",
            "yulanyayuan/0E0A76157EC62A321758D4B62C4EB3B7.png",
            "yulanyayuan/0F18EC3A49FF0B9E069876AD54451BD8.png",
            "yulanyayuan/139BBA8C4EA5266CC33EFC80EB9AB772.png",
            "yulanyayuan/17173F46373FE942D924F197E5387D6B.png",
            "yulanyayuan/184A95DD24BA4984B15699B5B44F3056.png",
            "yulanyayuan/19B440A03304E5A8F575F34D79E00F6D.png",
            "yulanyayuan/1FD83C6DA36E0D40D3886DDD65425268.png",
            "yulanyayuan/204A7F4367F478876CB6CDA789C3CAF6.png",
            "yulanyayuan/20A7B623BB7D24938E243F15662FD482.png",
            "yulanyayuan/20CA2ED45ADC3C081E720F39B8AFD2A7.png",
            "yulanyayuan/20D80131A813F3012D5108A7CD9B7AA4.png",
            "yulanyayuan/2329623BD997021FA829AADC6F793D41.png",
            "yulanyayuan/296E9DE4164EC6127874D621BC9117D6.png",
            "yulanyayuan/29E496F958EF732E88AEE1942C52260A.png",
            "yulanyayuan/2E329EE8A828D50FBB48DAF5F49564A7.png",
            "yulanyayuan/2FF179AA6FFC5A423BAE267705793373.png",
            "yulanyayuan/3417240956D86AA38C2B0C4FFB001400.png",
            "yulanyayuan/36F1E81F30C58F82300DAE635C77FF72.png",
            "yulanyayuan/3E44D02D9F5B6A7B91A6F54D45CFBF48.png",
            "yulanyayuan/3F4A4F051D00E5B35F358D9725D7D756.png",
            "yulanyayuan/3FA2258D622B907B35359F6DE15C6FEF.png",
            "yulanyayuan/41D447A9CA7F1A09660D96346437B88B.png",
            "yulanyayuan/43BCE102D9BBCF1BC83F6F4CFE63978B.png",
            "yulanyayuan/307E74CF6E26D861F5AC7C14456B409F.png",
            "yulanyayuan/4828CE4DB6F1E89245FEFB57699EA9FC.png",
            "yulanyayuan/4955888006D9BEA0CC7CDBF08271A1B2.png",
            "yulanyayuan/4B484ABFA7331A27A189356856535099.png",
            "yulanyayuan/4ED25C4BF60475BDD170829B8DCA6336.png",
            "yulanyayuan/4F11B20D7F3B92C56176DEB882D3C470.png",
            "yulanyayuan/510DDEC5F9C2F80AA3DCF5A139DF2219.png",
            "yulanyayuan/513B41A30FB58FF54977FB05DDB2482B.png",
            "yulanyayuan/53B6425A9B840584FEA52DA5B72CDECA.png",
            "yulanyayuan/5478CFA3F58746A8E3B49C2BD472DED5.png",
            "yulanyayuan/583640F6522873F7F462E695130CBAFA.png",
            "yulanyayuan/58460F0585C90531B3417987A83E8C5B.png",
            "yulanyayuan/59FE93ABD9FB84EC706B07E0528DCC4E.png",
            "yulanyayuan/5B67A185C80A42A42A1169001C312FCC.png",
            "yulanyayuan/5E06DFBB6B14FDB4634DA0A545B0B5D5.png",
            "yulanyayuan/66BC6E7F80B2EDBCF03269CF85F5BBBF.png",
            "yulanyayuan/674539E7AEF8E5CA053E7B2FD4C85F99.png",
            "yulanyayuan/6A5A40298D90F914ED46F172EF392B80.png",
            "yulanyayuan/6ABAE346518C1C3CB37ABFA0985CAFA8.png",
            "yulanyayuan/70D247FDB14C33310A2AF0BEA2E56B65.png",
            "yulanyayuan/73FAD5966E4F282265BF8C00245188CB.png",
            "yulanyayuan/754C8B83B10F295082274A5965C3A268.png",
            "yulanyayuan/768C884B1746A8E546B07BD5A1DD1BE5.png",
            "yulanyayuan/78D7DC739EDD1E9CBAC02315C614450A.png",
            "yulanyayuan/79466D2BAD6AA09C769E412345404C6C.png",
            "yulanyayuan/79AD054C0C9A79526E90C22DC7618470.png",
            "yulanyayuan/7AA0E1DCF0F4CD76934881A335EAF36A.png",
            "yulanyayuan/7DD8A8165B26CBA5C8ECDF4325BF8392.png",
            "yulanyayuan/7EBE4E4548B0956812AAEC086DB4A923.png",
            "yulanyayuan/82C61FBCC45CC0C2089E550E189D706A.png",
            "yulanyayuan/83456C294F438F4E8AE9B1997E292E38.png",
            "yulanyayuan/8971CFFEDEB8E4EABACED31E6903E580.png",
            "yulanyayuan/8D467D1AF8EA09D2AECC727D76FAD944.png",
            "yulanyayuan/8D5109F800E6776CA8B382CFA6AC6819.png",
            "yulanyayuan/8E81FE32472E497BA8F4D519C473EEF7.png",
            "yulanyayuan/90AE299B274CB8F93177209CE0D5B9BE.png",
            "yulanyayuan/97289CAE3C10CFD149DC5BD1640A2363.png",
            "yulanyayuan/98B489BAAF539369EB1D7A5C9BF6ED93.png",
            "yulanyayuan/9A2AACF681FF67651B056B2BCA898C5D.png",
            "yulanyayuan/9C55D88EA14B107180240DBA14AAA097.png",
            "yulanyayuan/9DBF3F8B6394BC8672047EF5EFE39D60.png",
            "yulanyayuan/A34DAFA9997B9ED2A76662265F7ACA99.png",
            "yulanyayuan/A731056782ECD16E03AA5EE346085322.png",
            "yulanyayuan/A8E8FF9D5AAAFBF81318FD2D28AE6FF2.png",
            "yulanyayuan/AA9E1F838D41BFC50A2C4D5B969DFF95.png",
            "yulanyayuan/AB632760FE2E408898B5F5F1040F0A1B.png",
            "yulanyayuan/B65A24DC6FDDF1232267EAA922F8DDF4.png",
            "yulanyayuan/B844759489C5B744E498B2EB00B03617.png",
            "yulanyayuan/B943D2E99ADFC785B84D015D69F889ED.png",
            "yulanyayuan/BA1726A6D8815709CB46570837FB2C33.png",
            "yulanyayuan/BC5AD6C25CC04995414ECEF1A52EC441.png",
            "yulanyayuan/BC8EC6E0141A24070422CDB7ED485368.png",
            "yulanyayuan/BE253E3C58356A899379653EAB564774.png",
            "yulanyayuan/C4016F323A815FD33F086024C185CA42.png",
            "yulanyayuan/C9E0F505196033085F762D00F797BEDA.png",
            "yulanyayuan/CB2DF6D34DE25A98DD83F1619A3591BF.png",
            "yulanyayuan/CF197BB11737E969825E7A4D5B2CF070.png",
            "yulanyayuan/D35FF6FB5EB1BF2A94D4BA44AB7A98A1.png",
            "yulanyayuan/D56B662629C0C079B34706EEBA536A71.png",
            "yulanyayuan/D5BA29E2D73B262950833C99A9AB884C.png",
            "yulanyayuan/D6092B5F4CFFF1398F63715C8FF88671.png",
            "yulanyayuan/D7AFD4BD74635D8CC8469CC98B004F48.png",
            "yulanyayuan/E303E18517441A3C28EB272DD06A7169.png",
            "yulanyayuan/E643051F8914B64612E7F24AD8A20775.png",
            "yulanyayuan/E6F826876E61BEC88019A82CC2E250D3.png",
            "yulanyayuan/EB8413360C35668EC8CF3AC90488A8B4.png",
            "yulanyayuan/F16BAA4062C5A47E1A62BD7D453C3233.png",
            "yulanyayuan/F6811DF0530E67BC717A6A1EC65E1721.png",
            "yulanyayuan/FBBB1BEA35D6FCFD40994B203F153D2D.png",
            "yulanyayuan/FF458F4ADCC43FA5B064C5E892E42277.png",
            "yulanyayuan/FF6AB6B3AC446977DC1DABF2B7727FE7.png",
        ],
        videoList: [
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/2021-11-20%20100424.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/116773.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/131788.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/134401.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/134564.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/IMG_1429.mp4",
            "https://yueyan-1306269746.cos.ap-nanjing.myqcloud.com/video/yulanyayuan/IMG_1907.mp4",
        ],
    },
    xjWestRoad: {
        name: "xjWestRoad",
        text: "湘江西路",
        imgList: [
            "xjWestRoad/1172F44B48FCD29B6AF68DB17684418D.png",
            "xjWestRoad/12D3168568E22FD87CDFB040A1D42F07.png",
            "xjWestRoad/1D68203FFD3DC9B1BD7FCB9DC7F75E01.png",
            "xjWestRoad/1FF6484527D9F2AF10DD134B8A8CA505.png",
            "xjWestRoad/3F38BE0046EB65969A4711410C4FB758.png",
            "xjWestRoad/4B1EDE453D9780EB60078A441EF10FBC.png",
            "xjWestRoad/7D4670A909B349C3F5E0A42E562D994C.png",
            "xjWestRoad/7ED735304D365C8497EC72773986C327.png",
            "xjWestRoad/84CC870DCFBC32A613B1042CD70FDFA7.png",
            "xjWestRoad/8B65F283F6AED1D8482C92853E8EEC6B.png",
            "xjWestRoad/9DED83F05E21FBCB2B8827BC107F018C.png",
            "xjWestRoad/AAA768DBE63B2EF69819A3407277D1A4.png",
            "xjWestRoad/BF200E7942F9B3890ED7EEC2F78E2EA6.png",
            "xjWestRoad/D5073F5CBB2605EDDCF7A7A2A1FE8B48.png",
            "xjWestRoad/D821FB72C1E7E38AC10AA288CE3A02FA.png",
            "xjWestRoad/D82A330C02DFEA265DB5DF7876F411FB.png",
            "xjWestRoad/E93DC11D903086D41A0F5380B03BA43A.png",
            "xjWestRoad/ED2FC3584011AEE5B6E9C98B864D6686.png",
            "xjWestRoad/F104FA6854F3A39962E21B82949EDD4E.png",
            "xjWestRoad/F50AD39EC0E8B5AB641B6D515E551A1A.png",
            "xjWestRoad/F5861542652E1779AD88745D4AF548CC.png",
            "xjWestRoad/F6915799F8C9317929E3569F0CDBCABE.png",
            "xjWestRoad/F97025A93A9B10ADD69B19E43DCC0B50.png",
        ],
        videoList: [],
    },
    chayanyuese: {
        name: "chayanyuese",
        text: "茶颜悦色",
        imgList: [
            "chayanyuese/7917B9DA457F7DE7633D0E3E4E11E63B.png",
            "chayanyuese/7D86E5386D0E6C2F9BD6B8CD1E736DF7.png",
            "chayanyuese/A1E04DC8691B552B316ECC07D4C535F3.png",
            "chayanyuese/BAA8DCC36914A47BFB7A7EF7B1F779D4.png",
            "chayanyuese/BB51820FF7769608B8B036E421913BA3.png",
        ],
        videoList: [],
    },
    jlBusStation: {
        name: "jlBusStation",
        text: "监利汽车站",
        imgList: ["jlBusStation/489CEAAC33D10678031279B522603075.png", "jlBusStation/AC9A4ED5C1DF19D0855209F8DCA9315E.png"],
        videoList: [],
    },
    xiangshuiwan: {
        name: "xiangshuiwan",
        text: "香水湾",
        imgList: [
            "xiangshuiwan/25CDF88B8B1358445C8522E71D319D0A.png",
            "xiangshuiwan/35850AC294B7B92A823E3B25B7DFC8D2.png",
            "xiangshuiwan/582AAA17FABCEB0C7E3482726CC3700B.png",
            "xiangshuiwan/6255D66FC545F91033674B075DC5FF69.png",
            "xiangshuiwan/6D93054352E67E8A3236D09CC67F8D2A.png",
            "xiangshuiwan/94694899F360A309069A38DCFFDEAC98.png",
            "xiangshuiwan/BC214B41959BCEE607165827D939D662.png",
            "xiangshuiwan/C68276CB2B0A9F6D75E000B2049733DB.png",
        ],
        videoList: [],
    },
    hkRiverBeach: {
        name: "hkRiverBeach",
        text: "汉口江滩",
        imgList: [
            "hkRiverBeach/26900F34A4BF363AAF144AE39A587661.png",
            "hkRiverBeach/30C1A1FAE387E63609CBCDAFD380FB47.png",
            "hkRiverBeach/4E80469D04213D41C8576C9BCE5097AE.png",
            "hkRiverBeach/5EED934E341E4C277387FEE42ED08CF0.png",
            "hkRiverBeach/699563A233FFE0D69EA344182BC7C46B.png",
            "hkRiverBeach/6C3D458680E468FFBCFACA1AB95112D7.png",
            "hkRiverBeach/722F8B15DE1905FE11C3085E42643FDC.png",
            "hkRiverBeach/81DC24251916D21B5FE05F1D701E1F13.png",
            "hkRiverBeach/87137AD0053BE3A0F7C50220920154A5.png",
            "hkRiverBeach/8FB82B818FE088E4817CF7C817EAC12E.png",
            "hkRiverBeach/A45F6C6502DC0B5A1673E2C4C0B27A19.png",
            "hkRiverBeach/C203E13B765B4B0BC2153C31AC0DE385.png",
            "hkRiverBeach/C35D2D69F73917C88B5411E9C9269C18.png",
            "hkRiverBeach/DC621D9BB877DAD9C484830CE63E7148.png",
            "hkRiverBeach/F2FA72416AC3EFC8996F3C9AE4C0C929.png",
            "hkRiverBeach/F8C313F1E35873E84BAFFE1233E92CCA.png",
        ],
        videoList: [],
    },
    jinronggang: {
        name: "jinronggang",
        text: "金融港",
        imgList: ["jinronggang/70F9B29138DDE5E5B726689C86F9A3D8.png", "jinronggang/E593282E372A05A6A8602AEEF75B67AF.png", "jinronggang/FFC375AC987F62E1959F318D934A1B4B.png"],
        videoList: [],
    },
};
export { regionList, category };
