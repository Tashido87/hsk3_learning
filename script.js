// Chinese Learning App JavaScript

// Current day state
let currentDay = 1;

// Complete lesson data structure - Day 1 fully populated, Days 2-30 templates
const lessonsData = {
    1: {
    title: "Family Members",
    vocabulary: [
        { pinyin: "jiā", simplified: "家", traditional: "家", english: "family/home" },
        { pinyin: "bàba", simplified: "爸爸", traditional: "爸爸", english: "father/dad" },
        { pinyin: "māma", simplified: "妈妈", traditional: "媽媽", english: "mother/mom" },
        { pinyin: "érzi", simplified: "儿子", traditional: "兒子", english: "son" },
        { pinyin: "nǚ'ér", simplified: "女儿", traditional: "女兒", english: "daughter" },
        { pinyin: "gēge", simplified: "哥哥", traditional: "哥哥", english: "older brother" },
        { pinyin: "dìdi", simplified: "弟弟", traditional: "弟弟", english: "younger brother" },
        { pinyin: "jiějie", simplified: "姐姐", traditional: "姐姐", english: "older sister" },
        { pinyin: "mèimei", simplified: "妹妹", traditional: "妹妹", english: "younger sister" },
        { pinyin: "yéye", simplified: "爷爷", traditional: "爺爺", english: "paternal grandfather" },
        { pinyin: "nǎinai", simplified: "奶奶", traditional: "奶奶", english: "paternal grandmother" },
        { pinyin: "wàigōng", simplified: "外公", traditional: "外公", english: "maternal grandfather" },
        { pinyin: "wàipó", simplified: "外婆", traditional: "外婆", english: "maternal grandmother" },
        { pinyin: "shūshu", simplified: "叔叔", traditional: "叔叔", english: "uncle (father's younger brother)" },
        { pinyin: "āyí", simplified: "阿姨", traditional: "阿姨", english: "aunt" },
        { pinyin: "zhàngfu", simplified: "丈夫", traditional: "丈夫", english: "husband" },
        { pinyin: "qīzi", simplified: "妻子", traditional: "妻子", english: "wife" },
        { pinyin: "sūnzi", simplified: "孙子", traditional: "孫子", english: "grandson" },
        { pinyin: "sūnnǚ", simplified: "孙女", traditional: "孫女", english: "granddaughter" },
        { pinyin: "fūmǔ", simplified: "父母", traditional: "父母", english: "parents" },
        { pinyin: "xiōngdì", simplified: "兄弟", traditional: "兄弟", english: "brothers" },
        { pinyin: "jiěmèi", simplified: "姐妹", traditional: "姐妹", english: "sisters" }
    ],
    sentences: [
        { simplified: "我的家有四个人。", pinyin: "Wǒ de jiā yǒu sì gè rén.", english: "My family has four people." },
        { simplified: "爸爸今天去上班。", pinyin: "Bàba jīntiān qù shàngbān.", english: "Dad goes to work today." },
        { simplified: "妈妈在厨房做饭。", pinyin: "Māma zài chúfáng zuòfān.", english: "Mom is cooking in the kitchen." },
        { simplified: "我的儿子很聪明。", pinyin: "Wǒ de érzi hěn cōngmíng.", english: "My son is very smart." },
        { simplified: "女儿喜欢画画。", pinyin: "Nǚ'ér xǐhuān huàhuà.", english: "My daughter likes to draw." },
        { simplified: "哥哥比我高。", pinyin: "Gēge bǐ wǒ gāo.", english: "My older brother is taller than me." },
        { simplified: "弟弟还在上学。", pinyin: "Dìdi hái zài shàngxué.", english: "My younger brother is still in school." },
        { simplified: "姐姐已经结婚了。", pinyin: "Jiějie yǐjīng jiéhūn le.", english: "My older sister is already married." },
        { simplified: "妹妹喜欢唱歌。", pinyin: "Mèimei xǐhuān chànggē.", english: "My younger sister likes to sing." },
        { simplified: "爷爷每天看报纸。", pinyin: "Yéye měitiān kàn bàozhǐ.", english: "Grandpa reads the newspaper every day." },
        { simplified: "奶奶会做很多菜。", pinyin: "Nǎinai huì zuò hěn duō cài.", english: "Grandma can cook many dishes." },
        { simplified: "外公住在乡下。", pinyin: "Wàigōng zhù zài xiāngxià.", english: "Maternal grandpa lives in the countryside." },
        { simplified: "外婆身体很好。", pinyin: "Wàipó shēntǐ hěn hǎo.", english: "Maternal grandma is in good health." },
        { simplified: "叔叔开车送我去学校。", pinyin: "Shūshu kāichē sòng wǒ qù xuéxiào.", english: "Uncle drives me to school." },
        { simplified: "阿姨买了很多水果。", pinyin: "Āyí mǎi le hěn duō shuǐguǒ.", english: "Aunt bought a lot of fruit." },
        { simplified: "丈夫每天早起锻炼。", pinyin: "Zhàngfu měitiān zǎoqǐ duànliàn.", english: "My husband gets up early to exercise every day." },
        { simplified: "妻子是一名医生。", pinyin: "Qīzi shì yī míng yīshēng.", english: "My wife is a doctor." },
        { simplified: "孙子刚学会走路。", pinyin: "Sūnzi gāng xuéhuì zǒulù.", english: "My grandson just learned to walk." },
        { simplified: "孙女很乖很听话。", pinyin: "Sūnnǚ hěn guāi hěn tīnghuà.", english: "My granddaughter is very well-behaved and obedient." },
        { simplified: "父母都很关心我们。", pinyin: "Fùmǔ dōu hěn guānxīn wǒmen.", english: "Both parents care about us very much." },
        { simplified: "兄弟姐妹要互相帮助。", pinyin: "Xiōngdì jiěmèi yào hùxiāng bāngzhù.", english: "Brothers and sisters should help each other." },
        { simplified: "我们家人都很健康。", pinyin: "Wǒmen jiārén dōu hěn jiànkāng.", english: "All our family members are very healthy." },
        { simplified: "家是最温暖的地方。", pinyin: "Jiā shì zuì wēnnuǎn de dìfāng.", english: "Home is the warmest place." },
        { simplified: "我爱我的家人。", pinyin: "Wǒ ài wǒ de jiārén.", english: "I love my family." },
        { simplified: "家人在一起很开心。", pinyin: "Jiārén zài yīqǐ hěn kāixīn.", english: "The family is very happy when together." },
        { simplified: "过节的时候家人团聚。", pinyin: "Guòjié de shíhòu jiārén tuánjù.", english: "The family reunites during holidays." },
        { simplified: "每个家庭都有自己的故事。", pinyin: "Měi gè jiātíng dōu yǒu zìjǐ de gùshì.", english: "Every family has its own story." },
        { simplified: "家庭和睦最重要。", pinyin: "Jiātíng hémù zuì zhòngyào.", english: "Family harmony is most important." },
        { simplified: "全家人一起吃晚饭。", pinyin: "Quánjiārén yīqǐ chī wǎnfān.", english: "The whole family eats dinner together." },
        { simplified: "这是我们的全家福。", pinyin: "Zhè shì wǒmen de quánjiāfú.", english: "This is our family photo." }
    ]
},

2: {
    title: "Daily Activities & Routines",
    vocabulary: [
        { pinyin: "qǐchuáng", simplified: "起床", traditional: "起床", english: "get up" },
        { pinyin: "shuìjiào", simplified: "睡觉", traditional: "睡覺", english: "sleep" },
        { pinyin: "xǐliǎn", simplified: "洗脸", traditional: "洗臉", english: "wash face" },
        { pinyin: "shuāyá", simplified: "刷牙", traditional: "刷牙", english: "brush teeth" },
        { pinyin: "xǐzǎo", simplified: "洗澡", traditional: "洗澡", english: "take a bath/shower" },
        { pinyin: "chuānyī", simplified: "穿衣", traditional: "穿衣", english: "get dressed" },
        { pinyin: "chīfān", simplified: "吃饭", traditional: "吃飯", english: "eat/have a meal" },
        { pinyin: "shàngbān", simplified: "上班", traditional: "上班", english: "go to work" },
        { pinyin: "xiàbān", simplified: "下班", traditional: "下班", english: "get off work" },
        { pinyin: "shàngxué", simplified: "上学", traditional: "上學", english: "go to school" },
        { pinyin: "fàngxué", simplified: "放学", traditional: "放學", english: "finish school" },
        { pinyin: "xuéxí", simplified: "学习", traditional: "學習", english: "study/learn" },
        { pinyin: "gōngzuò", simplified: "工作", traditional: "工作", english: "work" },
        { pinyin: "xiūxi", simplified: "休息", traditional: "休息", english: "rest" },
        { pinyin: "duànliàn", simplified: "锻炼", traditional: "鍛煉", english: "exercise" },
        { pinyin: "sànbù", simplified: "散步", traditional: "散步", english: "take a walk" },
        { pinyin: "pǎobù", simplified: "跑步", traditional: "跑步", english: "jog/run" },
        { pinyin: "dǎsǎo", simplified: "打扫", traditional: "打掃", english: "clean" },
        { pinyin: "zuòfàn", simplified: "做饭", traditional: "做飯", english: "cook" },
        { pinyin: "mǎicài", simplified: "买菜", traditional: "買菜", english: "buy groceries" },
        { pinyin: "kāichē", simplified: "开车", traditional: "開車", english: "drive a car" },
        { pinyin: "zuòchē", simplified: "坐车", traditional: "坐車", english: "take a vehicle" },
        { pinyin: "zǒulù", simplified: "走路", traditional: "走路", english: "walk" }
    ],
    sentences: [
        { simplified: "我每天早上六点起床。", pinyin: "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.", english: "I get up at 6 o'clock every morning." },
        { simplified: "起床后我先洗脸刷牙。", pinyin: "Qǐchuáng hòu wǒ xiān xǐliǎn shuāyá.", english: "After getting up, I first wash my face and brush my teeth." },
        { simplified: "爸爸每天晚上十点睡觉。", pinyin: "Bàba měitiān wǎnshang shí diǎn shuìjiào.", english: "Dad goes to sleep at 10 o'clock every night." },
        { simplified: "妈妈在厨房做饭。", pinyin: "Māma zài chúfáng zuòfàn.", english: "Mom is cooking in the kitchen." },
        { simplified: "我们家人一起吃饭。", pinyin: "Wǒmen jiārén yīqǐ chīfān.", english: "Our family eats together." },
        { simplified: "哥哥每天早上跑步锻炼。", pinyin: "Gēge měitiān zǎoshang pǎobù duànliàn.", english: "My older brother runs for exercise every morning." },
        { simplified: "姐姐八点上班，五点下班。", pinyin: "Jiějie bā diǎn shàngbān, wǔ diǎn xiàbān.", english: "My older sister goes to work at 8 and gets off work at 5." },
        { simplified: "弟弟每天走路去上学。", pinyin: "Dìdi měitiān zǒulù qù shàngxué.", english: "My younger brother walks to school every day." },
        { simplified: "妹妹放学后在家学习。", pinyin: "Mèimei fàngxué hòu zài jiā xuéxí.", english: "My younger sister studies at home after school." },
        { simplified: "爷爷喜欢晚上散步。", pinyin: "Yéye xǐhuān wǎnshang sànbù.", english: "Grandpa likes to take walks in the evening." },
        { simplified: "奶奶每天去市场买菜。", pinyin: "Nǎinai měitiān qù shìchǎng mǎicài.", english: "Grandma goes to the market to buy groceries every day." },
        { simplified: "外公每天下午休息。", pinyin: "Wàigōng měitiān xiàwǔ xiūxi.", english: "Maternal grandpa rests every afternoon." },
        { simplified: "外婆帮忙打扫房子。", pinyin: "Wàipó bāngmáng dǎsǎo fángzi.", english: "Maternal grandma helps clean the house." },
        { simplified: "叔叔开车去工作。", pinyin: "Shūshu kāichē qù gōngzuò.", english: "Uncle drives to work." },
        { simplified: "阿姨坐车回家。", pinyin: "Āyí zuòchē huíjiā.", english: "Aunt takes a vehicle home." },
        { simplified: "我晚上洗澡然后睡觉。", pinyin: "Wǒ wǎnshang xǐzǎo ránhòu shuìjiào.", english: "I take a shower at night and then go to sleep." },
        { simplified: "早上起床后要穿衣服。", pinyin: "Zǎoshang qǐchuáng hòu yào chuānyīfu.", english: "After getting up in the morning, I need to get dressed." },
        { simplified: "孩子们放学后在家写作业。", pinyin: "Háizimen fàngxué hòu zài jiā xiě zuòyè.", english: "The children do homework at home after school." },
        { simplified: "丈夫下班后帮妻子做饭。", pinyin: "Zhàngfu xiàbān hòu bāng qīzi zuòfàn.", english: "The husband helps his wife cook after work." },
        { simplified: "我们全家周末一起打扫房子。", pinyin: "Wǒmen quánjiā zhōumò yīqǐ dǎsǎo fángzi.", english: "Our whole family cleans the house together on weekends." },
        { simplified: "父母每天很早就起床工作。", pinyin: "Fùmǔ měitiān hěn zǎo jiù qǐchuáng gōngzuò.", english: "Parents get up very early every day to work." },
        { simplified: "兄弟姐妹一起上学放学。", pinyin: "Xiōngdì jiěmèi yīqǐ shàngxué fàngxué.", english: "Brothers and sisters go to and from school together." },
        { simplified: "学生们在学校努力学习。", pinyin: "Xuéshengmen zài xuéxiào nǔlì xuéxí.", english: "Students study hard at school." },
        { simplified: "工作累了需要好好休息。", pinyin: "Gōngzuò lèi le xūyào hǎohāo xiūxi.", english: "When work is tiring, you need to rest well." },
        { simplified: "每天锻炼身体很重要。", pinyin: "Měitiān duànliàn shēntǐ hěn zhòngyào.", english: "Daily exercise is very important." },
        { simplified: "吃饭前要洗手。", pinyin: "Chīfān qián yào xǐshǒu.", english: "Wash hands before eating." },
        { simplified: "睡觉前要刷牙洗脸。", pinyin: "Shuìjiào qián yào shuāyá xǐliǎn.", english: "Brush teeth and wash face before sleeping." },
        { simplified: "上班不能迟到。", pinyin: "Shàngbān bù néng chídào.", english: "Cannot be late for work." },
        { simplified: "学生应该按时上学。", pinyin: "Xuésheng yīnggāi ànshí shàngxué.", english: "Students should go to school on time." },
        { simplified: "每个人都有自己的日常生活。", pinyin: "Měi gè rén dōu yǒu zìjǐ de rìcháng shēnghuó.", english: "Everyone has their own daily life." }
    ]
},

3: {
    title: "Food & Drinks",
    vocabulary: [
        { pinyin: "fàn", simplified: "饭", traditional: "飯", english: "rice/meal" },
        { pinyin: "miàn", simplified: "面", traditional: "麵", english: "noodles" },
        { pinyin: "miànbāo", simplified: "面包", traditional: "麵包", english: "bread" },
        { pinyin: "ròu", simplified: "肉", traditional: "肉", english: "meat" },
        { pinyin: "jī", simplified: "鸡", traditional: "雞", english: "chicken" },
        { pinyin: "yú", simplified: "鱼", traditional: "魚", english: "fish" },
        { pinyin: "cài", simplified: "菜", traditional: "菜", english: "vegetable/dish" },
        { pinyin: "shuǐguǒ", simplified: "水果", traditional: "水果", english: "fruit" },
        { pinyin: "píngguǒ", simplified: "苹果", traditional: "蘋果", english: "apple" },
        { pinyin: "xiāngjiāo", simplified: "香蕉", traditional: "香蕉", english: "banana" },
        { pinyin: "júzi", simplified: "橘子", traditional: "橘子", english: "orange" },
        { pinyin: "xīguā", simplified: "西瓜", traditional: "西瓜", english: "watermelon" },
        { pinyin: "jīdàn", simplified: "鸡蛋", traditional: "雞蛋", english: "egg" },
        { pinyin: "niúnái", simplified: "牛奶", traditional: "牛奶", english: "milk" },
        { pinyin: "chá", simplified: "茶", traditional: "茶", english: "tea" },
        { pinyin: "kāfēi", simplified: "咖啡", traditional: "咖啡", english: "coffee" },
        { pinyin: "shuǐ", simplified: "水", traditional: "水", english: "water" },
        { pinyin: "jiǔ", simplified: "酒", traditional: "酒", english: "alcohol/wine" },
        { pinyin: "táng", simplified: "糖", traditional: "糖", english: "sugar/candy" },
        { pinyin: "yán", simplified: "盐", traditional: "鹽", english: "salt" },
        { pinyin: "dòufu", simplified: "豆腐", traditional: "豆腐", english: "tofu" },
        { pinyin: "mǐfàn", simplified: "米饭", traditional: "米飯", english: "cooked rice" },
        { pinyin: "jiǎozi", simplified: "饺子", traditional: "餃子", english: "dumplings" },
        { pinyin: "tāng", simplified: "汤", traditional: "湯", english: "soup" }
    ],
    sentences: [
        { simplified: "我喜欢吃中国菜。", pinyin: "Wǒ xǐhuān chī Zhōngguó cài.", english: "I like to eat Chinese food." },
        { simplified: "今天晚上我们吃米饭。", pinyin: "Jīntiān wǎnshang wǒmen chī mǐfàn.", english: "We're eating rice tonight." },
        { simplified: "妈妈做的面条很好吃。", pinyin: "Māma zuò de miàntiáo hěn hǎochī.", english: "The noodles mom makes are very delicious." },
        { simplified: "早餐我要吃面包和鸡蛋。", pinyin: "Zǎocān wǒ yào chī miànbāo hé jīdàn.", english: "For breakfast I want to eat bread and eggs." },
        { simplified: "爸爸喜欢吃鱼和肉。", pinyin: "Bàba xǐhuān chī yú hé ròu.", english: "Dad likes to eat fish and meat." },
        { simplified: "哥哥买了很多水果。", pinyin: "Gēge mǎi le hěn duō shuǐguǒ.", english: "My older brother bought a lot of fruit." },
        { simplified: "我最喜欢吃苹果。", pinyin: "Wǒ zuì xǐhuān chī píngguǒ.", english: "I like eating apples the most." },
        { simplified: "夏天吃西瓜很舒服。", pinyin: "Xiàtiān chī xīguā hěn shūfu.", english: "Eating watermelon in summer is very refreshing." },
        { simplified: "姐姐每天早上喝牛奶。", pinyin: "Jiějie měitiān zǎoshang hē niúnái.", english: "My older sister drinks milk every morning." },
        { simplified: "中国人喜欢喝茶。", pinyin: "Zhōngguórén xǐhuān hē chá.", english: "Chinese people like to drink tea." },
        { simplified: "我不喝咖啡，只喝水。", pinyin: "Wǒ bù hē kāfēi, zhǐ hē shuǐ.", english: "I don't drink coffee, I only drink water." },
        { simplified: "奶奶不能喝酒。", pinyin: "Nǎinai bù néng hē jiǔ.", english: "Grandma cannot drink alcohol." },
        { simplified: "孩子们喜欢吃糖。", pinyin: "Háizimen xǐhuān chī táng.", english: "Children like to eat candy." },
        { simplified: "做菜要放盐。", pinyin: "Zuòcài yào fàng yán.", english: "You need to add salt when cooking." },
        { simplified: "豆腐很有营养。", pinyin: "Dòufu hěn yǒu yíngyǎng.", english: "Tofu is very nutritious." },
        { simplified: "弟弟会包饺子。", pinyin: "Dìdi huì bāo jiǎozi.", english: "My younger brother can make dumplings." },
        { simplified: "这个汤很好喝。", pinyin: "Zhège tāng hěn hǎohē.", english: "This soup is very delicious." },
        { simplified: "香蕉和橘子都很甜。", pinyin: "Xiāngjiāo hé júzi dōu hěn tián.", english: "Both bananas and oranges are very sweet." },
        { simplified: "外婆炖的鸡汤最好喝。", pinyin: "Wàipó dùn de jītāng zuì hǎohē.", english: "The chicken soup that maternal grandma stews is the most delicious." },
        { simplified: "吃饭前要洗手。", pinyin: "Chīfān qián yào xǐshǒu.", english: "Wash hands before eating." },
        { simplified: "这家餐厅的菜很新鲜。", pinyin: "Zhè jiā cāntīng de cài hěn xīnxiān.", english: "The dishes at this restaurant are very fresh." },
        { simplified: "我们去超市买食物。", pinyin: "Wǒmen qù chāoshì mǎi shíwù.", english: "We go to the supermarket to buy food." },
        { simplified: "健康的饮食很重要。", pinyin: "Jiànkāng de yǐnshí hěn zhòngyào.", english: "A healthy diet is very important." },
        { simplified: "多吃蔬菜对身体好。", pinyin: "Duō chī shūcài duì shēntǐ hǎo.", english: "Eating more vegetables is good for the body." },
        { simplified: "不要吃太多肉。", pinyin: "Bù yào chī tài duō ròu.", english: "Don't eat too much meat." },
        { simplified: "饭后可以吃一些水果。", pinyin: "Fànhòu kěyǐ chī yīxiē shuǐguǒ.", english: "You can eat some fruit after meals." },
        { simplified: "每天要喝足够的水。", pinyin: "Měitiān yào hē zúgòu de shuǐ.", english: "You should drink enough water every day." },
        { simplified: "这道菜需要放糖和盐。", pinyin: "Zhè dào cài xūyào fàng táng hé yán.", english: "This dish needs sugar and salt." },
        { simplified: "中国的饺子世界有名。", pinyin: "Zhōngguó de jiǎozi shìjiè yǒumíng.", english: "Chinese dumplings are world-famous." },
        { simplified: "一日三餐要按时吃。", pinyin: "Yī rì sān cān yào ànshí chī.", english: "Three meals a day should be eaten on time." }
    ]
},
    
    4: {
        title: "Colors and Clothing",
        vocabulary: [
            { pinyin: "yánsè", simplified: "颜色", traditional: "顏色", english: "color" },
            { pinyin: "hóngsè", simplified: "红色", traditional: "紅色", english: "red" },
            { pinyin: "huángsè", simplified: "黄色", traditional: "黃色", english: "yellow" },
            { pinyin: "lǜsè", simplified: "绿色", traditional: "綠色", english: "green" },
            { pinyin: "lánsè", simplified: "蓝色", traditional: "藍色", english: "blue" },
            { pinyin: "zǐsè", simplified: "紫色", traditional: "紫色", english: "purple" },
            { pinyin: "fěnhóngsè", simplified: "粉红色", traditional: "粉紅色", english: "pink" },
            { pinyin: "jùhóngsè", simplified: "橘红色", traditional: "橘紅色", english: "orange" },
            { pinyin: "hēisè", simplified: "黑色", traditional: "黑色", english: "black" },
            { pinyin: "báisè", simplified: "白色", traditional: "白色", english: "white" },
            { pinyin: "huīsè", simplified: "灰色", traditional: "灰色", english: "gray" },
            { pinyin: "zōngsè", simplified: "棕色", traditional: "棕色", english: "brown" },
            { pinyin: "yīfu", simplified: "衣服", traditional: "衣服", english: "clothes" },
            { pinyin: "chènshān", simplified: "衬衫", traditional: "襯衫", english: "shirt" },
            { pinyin: "T xùshān", simplified: "T恤衫", traditional: "T恤衫", english: "T-shirt" },
            { pinyin: "kùzi", simplified: "裤子", traditional: "褲子", english: "pants/trousers" },
            { pinyin: "niúzǎikù", simplified: "牛仔裤", traditional: "牛仔褲", english: "jeans" },
            { pinyin: "qúnzi", simplified: "裙子", traditional: "裙子", english: "skirt/dress" },
            { pinyin: "wàitào", simplified: "外套", traditional: "外套", english: "jacket/coat" },
            { pinyin: "máoyī", simplified: "毛衣", traditional: "毛衣", english: "sweater" },
            { pinyin: "xíngzhuāng", simplified: "西装", traditional: "西裝", english: "suit" },
            { pinyin: "xiézi", simplified: "鞋子", traditional: "鞋子", english: "shoes" },
            { pinyin: "yùndòngxié", simplified: "运动鞋", traditional: "運動鞋", english: "sneakers/sports shoes" },
            { pinyin: "gāogēnxié", simplified: "高跟鞋", traditional: "高跟鞋", english: "high heels" },
            { pinyin: "tuōxié", simplified: "拖鞋", traditional: "拖鞋", english: "slippers" },
            { pinyin: "wàzi", simplified: "袜子", traditional: "襪子", english: "socks" },
            { pinyin: "màozi", simplified: "帽子", traditional: "帽子", english: "hat/cap" },
            { pinyin: "shǒutào", simplified: "手套", traditional: "手套", english: "gloves" },
            { pinyin: "wéijīn", simplified: "围巾", traditional: "圍巾", english: "scarf" },
            { pinyin: "yǎnjīng", simplified: "眼镜", traditional: "眼鏡", english: "glasses" },
            { pinyin: "shǒubiǎo", simplified: "手表", traditional: "手表", english: "watch" },
            { pinyin: "xiàngliàn", simplified: "项链", traditional: "項鏈", english: "necklace" },
            { pinyin: "ěrhuán", simplified: "耳环", traditional: "耳環", english: "earrings" },
            { pinyin: "jiè zhǐ", simplified: "戒指", traditional: "戒指", english: "ring" },
            { pinyin: "pídài", simplified: "皮带", traditional: "皮帶", english: "belt" },
            { pinyin: "qiánbāo", simplified: "钱包", traditional: "錢包", english: "wallet" },
            { pinyin: "shǒutíbāo", simplified: "手提包", traditional: "手提包", english: "handbag" },
            { pinyin: "shuāngjiānbāo", simplified: "双肩包", traditional: "雙肩包", english: "backpack" }
        ],
        sentences: [
            { 
                simplified: "你喜欢什么颜色？", 
                pinyin: "Nǐ xǐhuān shénme yánsè?", 
                english: "What color do you like?" 
            },
            { 
                simplified: "我最喜欢蓝色。", 
                pinyin: "Wǒ zuì xǐhuān lánsè.", 
                english: "I like blue the most." 
            },
            { 
                simplified: "这件红色的衣服很漂亮。", 
                pinyin: "Zhè jiàn hóngsè de yīfu hěn piàoliang.", 
                english: "This red piece of clothing is very beautiful." 
            },
            { 
                simplified: "她穿着一条黄色的裙子。", 
                pinyin: "Tā chuānzhe yī tiáo huángsè de qúnzi.", 
                english: "She is wearing a yellow skirt." 
            },
            { 
                simplified: "绿色是春天的颜色。", 
                pinyin: "Lǜsè shì chūntiān de yánsè.", 
                english: "Green is the color of spring." 
            },
            { 
                simplified: "这双黑色的鞋子多少钱？", 
                pinyin: "Zhè shuāng hēisè de xiézi duōshǎo qián?", 
                english: "How much are these black shoes?" 
            },
            { 
                simplified: "白色的衬衫很容易脏。", 
                pinyin: "Báisè de chènshān hěn róngyì zāng.", 
                english: "White shirts get dirty easily." 
            },
            { 
                simplified: "灰色的外套适合上班穿。", 
                pinyin: "Huīsè de wàitào shìhé shàngbān chuān.", 
                english: "Gray jackets are suitable for work." 
            },
            { 
                simplified: "他买了一件紫色的毛衣。", 
                pinyin: "Tā mǎi le yī jiàn zǐsè de máoyī.", 
                english: "He bought a purple sweater." 
            },
            { 
                simplified: "粉红色的帽子很可爱。", 
                pinyin: "Fěnhóngsè de màozi hěn kě'ài.", 
                english: "The pink hat is very cute." 
            },
            { 
                simplified: "我需要买新的运动鞋。", 
                pinyin: "Wǒ xūyào mǎi xīn de yùndòngxié.", 
                english: "I need to buy new sneakers." 
            },
            { 
                simplified: "这条牛仔裤太紧了。", 
                pinyin: "Zhè tiáo niúzǎikù tài jǐn le.", 
                english: "These jeans are too tight." 
            },
            { 
                simplified: "冬天要戴手套和围巾。", 
                pinyin: "Dōngtiān yào dài shǒutào hé wéijīn.", 
                english: "You need to wear gloves and a scarf in winter." 
            },
            { 
                simplified: "她的高跟鞋很时尚。", 
                pinyin: "Tā de gāogēnxié hěn shíshàng.", 
                english: "Her high heels are very fashionable." 
            },
            { 
                simplified: "这件T恤衫的尺码刚好。", 
                pinyin: "Zhè jiàn T xùshān de chǐmǎ gāng hǎo.", 
                english: "This T-shirt is the right size." 
            },
            { 
                simplified: "他穿西装去参加婚礼。", 
                pinyin: "Tā chuān xíngzhuāng qù cānjiā hūnlǐ.", 
                english: "He wore a suit to attend the wedding." 
            },
            { 
                simplified: "我的眼镜坏了，需要修理。", 
                pinyin: "Wǒ de yǎnjīng huài le, xūyào xiūlǐ.", 
                english: "My glasses are broken and need repair." 
            },
            { 
                simplified: "这个手表很昂贵。", 
                pinyin: "Zhège shǒubiǎo hěn ángguì.", 
                english: "This watch is very expensive." 
            },
            { 
                simplified: "妈妈给我买了一条项链。", 
                pinyin: "Māma gěi wǒ mǎi le yī tiáo xiàngliàn.", 
                english: "Mom bought me a necklace." 
            },
            { 
                simplified: "她戴着美丽的耳环。", 
                pinyin: "Tā dàizhe měilì de ěrhuán.", 
                english: "She is wearing beautiful earrings." 
            },
            { 
                simplified: "这个戒指是金的吗？", 
                pinyin: "Zhège jiè zhǐ shì jīn de ma?", 
                english: "Is this ring made of gold?" 
            },
            { 
                simplified: "我忘记系皮带了。", 
                pinyin: "Wǒ wàngjì xì pídài le.", 
                english: "I forgot to fasten my belt." 
            },
            { 
                simplified: "钱包里有我的身份证。", 
                pinyin: "Qiánbāo lǐ yǒu wǒ de shēnfènzhèng.", 
                english: "My ID card is in my wallet." 
            },
            { 
                simplified: "她的手提包很重。", 
                pinyin: "Tā de shǒutíbāo hěn zhòng.", 
                english: "Her handbag is very heavy." 
            },
            { 
                simplified: "学生们都背着双肩包。", 
                pinyin: "Xuéshēngmen dōu bēizhe shuāngjiānbāo.", 
                english: "The students are all carrying backpacks." 
            },
            { 
                simplified: "在家里要穿拖鞋。", 
                pinyin: "Zài jiālǐ yào chuān tuōxié.", 
                english: "You should wear slippers at home." 
            },
            { 
                simplified: "这双袜子有个洞。", 
                pinyin: "Zhè shuāng wàzi yǒu gè dòng.", 
                english: "This pair of socks has a hole." 
            },
            { 
                simplified: "棕色的颜色很自然。", 
                pinyin: "Zōngsè de yánsè hěn zìrán.", 
                english: "Brown is a very natural color." 
            },
            { 
                simplified: "橘红色让人感觉温暖。", 
                pinyin: "Jùhóngsè ràng rén gǎnjué wēnnuǎn.", 
                english: "Orange makes people feel warm." 
            },
            { 
                simplified: "每个人都有自己喜欢的颜色和风格。", 
                pinyin: "Měi gè rén dōu yǒu zìjǐ xǐhuān de yánsè hé fēnggé.", 
                english: "Everyone has their own favorite colors and style." 
            }
        ]
    },
    
    5: {
        title: "Transportation",
        vocabulary: [
            { pinyin: "chē", simplified: "车", traditional: "車", english: "vehicle/car" },
            { pinyin: "qìchē", simplified: "汽车", traditional: "汽車", english: "automobile/car" },
            { pinyin: "kāichē", simplified: "开车", traditional: "開車", english: "drive a car" },
            { pinyin: "zuòchē", simplified: "坐车", traditional: "坐車", english: "take a vehicle" },
            { pinyin: "chūzūchē", simplified: "出租车", traditional: "出租車", english: "taxi" },
            { pinyin: "gōnggòng qìchē", simplified: "公共汽车", traditional: "公共汽車", english: "bus" },
            { pinyin: "dìtiě", simplified: "地铁", traditional: "地鐵", english: "subway/metro" },
            { pinyin: "huǒchē", simplified: "火车", traditional: "火車", english: "train" },
            { pinyin: "fēijī", simplified: "飞机", traditional: "飛機", english: "airplane" },
            { pinyin: "chuán", simplified: "船", traditional: "船", english: "boat/ship" },
            { pinyin: "zìxíngchē", simplified: "自行车", traditional: "自行車", english: "bicycle" },
            { pinyin: "mótuōchē", simplified: "摩托车", traditional: "摩托車", english: "motorcycle" },
            { pinyin: "chēzhàn", simplified: "车站", traditional: "車站", english: "station" },
            { pinyin: "jīchǎng", simplified: "机场", traditional: "機場", english: "airport" },
            { pinyin: "gǎngkǒu", simplified: "港口", traditional: "港口", english: "port/harbor" },
            { pinyin: "lùkǒu", simplified: "路口", traditional: "路口", english: "intersection" },
            { pinyin: "hónglǜdēng", simplified: "红绿灯", traditional: "紅綠燈", english: "traffic light" },
            { pinyin: "jiāotōng", simplified: "交通", traditional: "交通", english: "traffic/transportation" },
            { pinyin: "sùdù", simplified: "速度", traditional: "速度", english: "speed" },
            { pinyin: "ānquán", simplified: "安全", traditional: "安全", english: "safe/safety" },
            { pinyin: "wēixiǎn", simplified: "危险", traditional: "危險", english: "dangerous" },
            { pinyin: "tínchē", simplified: "停车", traditional: "停車", english: "park a car" },
            { pinyin: "jiāyóu", simplified: "加油", traditional: "加油", english: "refuel/gas up" },
            { pinyin: "xiūlǐ", simplified: "修理", traditional: "修理", english: "repair/fix" },
            { pinyin: "shìgù", simplified: "事故", traditional: "事故", english: "accident" },
            { pinyin: "piào", simplified: "票", traditional: "票", english: "ticket" },
            { pinyin: "sījī", simplified: "司机", traditional: "司機", english: "driver" },
            { pinyin: "chéngkè", simplified: "乘客", traditional: "乘客", english: "passenger" },
            { pinyin: "lǚxíng", simplified: "旅行", traditional: "旅行", english: "travel/trip" },
            { pinyin: "chūfā", simplified: "出发", traditional: "出發", english: "depart/set off" }
        ],
        sentences: [
            { 
                simplified: "我每天开车上班。", 
                pinyin: "Wǒ měitiān kāichē shàngbān.", 
                english: "I drive to work every day." 
            },
            { 
                simplified: "坐地铁比开车快。", 
                pinyin: "Zuò dìtiě bǐ kāichē kuài.", 
                english: "Taking the subway is faster than driving." 
            },
            { 
                simplified: "出租车在路口等客人。", 
                pinyin: "Chūzūchē zài lùkǒu děng kèrén.", 
                english: "The taxi is waiting for customers at the intersection." 
            },
            { 
                simplified: "公共汽车站有很多人。", 
                pinyin: "Gōnggòng qìchē zhàn yǒu hěn duō rén.", 
                english: "There are many people at the bus station." 
            },
            { 
                simplified: "火车明天早上八点出发。", 
                pinyin: "Huǒchē míngtiān zǎoshang bā diǎn chūfā.", 
                english: "The train departs at 8 AM tomorrow morning." 
            },
            { 
                simplified: "飞机票太贵了。", 
                pinyin: "Fēijī piào tài guì le.", 
                english: "The airplane ticket is too expensive." 
            },
            { 
                simplified: "我们坐船去那个岛。", 
                pinyin: "Wǒmen zuò chuán qù nàge dǎo.", 
                english: "We take a boat to that island." 
            },
            { 
                simplified: "骑自行车很环保。", 
                pinyin: "Qí zìxíngchē hěn huánbǎo.", 
                english: "Riding a bicycle is very environmentally friendly." 
            },
            { 
                simplified: "摩托车的速度很快。", 
                pinyin: "Mótuōchē de sùdù hěn kuài.", 
                english: "Motorcycles are very fast." 
            },
            { 
                simplified: "机场离市中心很远。", 
                pinyin: "Jīchǎng lí shì zhōngxīn hěn yuǎn.", 
                english: "The airport is far from the city center." 
            },
            { 
                simplified: "红绿灯坏了，交通很乱。", 
                pinyin: "Hónglǜdēng huài le, jiāotōng hěn luàn.", 
                english: "The traffic light is broken, so traffic is chaotic." 
            },
            { 
                simplified: "这里不能停车。", 
                pinyin: "Zhèlǐ bù néng tíngchē.", 
                english: "You can't park here." 
            },
            { 
                simplified: "汽车没油了，需要加油。", 
                pinyin: "Qìchē méi yóu le, xūyào jiāyóu.", 
                english: "The car is out of gas and needs refueling." 
            },
            { 
                simplified: "司机开车很小心。", 
                pinyin: "Sījī kāichē hěn xiǎoxīn.", 
                english: "The driver drives very carefully." 
            },
            { 
                simplified: "乘客请买票上车。", 
                pinyin: "Chéngkè qǐng mǎi piào shàngchē.", 
                english: "Passengers please buy tickets before boarding." 
            },
            { 
                simplified: "路上车太多，很危险。", 
                pinyin: "Lùshang chē tài duō, hěn wēixiǎn.", 
                english: "There are too many cars on the road, it's dangerous." 
            },
            { 
                simplified: "安全第一，慢点开车。", 
                pinyin: "Ānquán dì yī, màn diǎn kāichē.", 
                english: "Safety first, drive slowly." 
            },
            { 
                simplified: "昨天发生了一起事故。", 
                pinyin: "Zuótiān fāshēng le yī qǐ shìgù.", 
                english: "An accident happened yesterday." 
            },
            { 
                simplified: "我的车坏了，要修理。", 
                pinyin: "Wǒ de chē huài le, yào xiūlǐ.", 
                english: "My car is broken and needs repair." 
            },
            { 
                simplified: "港口有很多大船。", 
                pinyin: "Gǎngkǒu yǒu hěn duō dà chuán.", 
                english: "There are many big ships at the port." 
            },
            { 
                simplified: "我们计划下个月旅行。", 
                pinyin: "Wǒmen jìhuà xià gè yuè lǚxíng.", 
                english: "We plan to travel next month." 
            },
            { 
                simplified: "地铁比公共汽车舒服。", 
                pinyin: "Dìtiě bǐ gōnggòng qìchē shūfu.", 
                english: "The subway is more comfortable than the bus." 
            },
            { 
                simplified: "交通堵塞让人很烦恼。", 
                pinyin: "Jiāotōng dǔsè ràng rén hěn fánnǎo.", 
                english: "Traffic jams are very annoying." 
            },
            { 
                simplified: "车站里有很多旅客。", 
                pinyin: "Chēzhàn lǐ yǒu hěn duō lǚkè.", 
                english: "There are many travelers in the station." 
            },
            { 
                simplified: "开车要遵守交通规则。", 
                pinyin: "Kāichē yào zūnshǒu jiāotōng guīzé.", 
                english: "When driving, you must follow traffic rules." 
            },
            { 
                simplified: "飞机是最快的交通工具。", 
                pinyin: "Fēijī shì zuì kuài de jiāotōng gōngjù.", 
                english: "Airplanes are the fastest means of transportation." 
            },
            { 
                simplified: "我在路口等出租车。", 
                pinyin: "Wǒ zài lùkǒu děng chūzūchē.", 
                english: "I'm waiting for a taxi at the intersection." 
            },
            { 
                simplified: "坐车的时候要系安全带。", 
                pinyin: "Zuòchē de shíhòu yào jì ānquándài.", 
                english: "You should wear a seatbelt when riding in a car." 
            },
            { 
                simplified: "他骑摩托车去公司。", 
                pinyin: "Tā qí mótuōchē qù gōngsī.", 
                english: "He rides a motorcycle to the company." 
            },
            { 
                simplified: "这辆车的速度太快了。", 
                pinyin: "Zhè liàng chē de sùdù tài kuài le.", 
                english: "This car's speed is too fast." 
            }
        ]
    },
    
    6: {
        title: "Weather and Seasons",
        vocabulary: [
            { pinyin: "tiānqì", simplified: "天气", traditional: "天氣", english: "weather" },
            { pinyin: "qìhòu", simplified: "气候", traditional: "氣候", english: "climate" },
            { pinyin: "tàiyáng", simplified: "太阳", traditional: "太陽", english: "sun" },
            { pinyin: "yuèliàng", simplified: "月亮", traditional: "月亮", english: "moon" },
            { pinyin: "xīngxing", simplified: "星星", traditional: "星星", english: "star" },
            { pinyin: "yún", simplified: "云", traditional: "雲", english: "cloud" },
            { pinyin: "yǔ", simplified: "雨", traditional: "雨", english: "rain" },
            { pinyin: "xuě", simplified: "雪", traditional: "雪", english: "snow" },
            { pinyin: "bīng", simplified: "冰", traditional: "冰", english: "ice" },
            { pinyin: "wù", simplified: "雾", traditional: "霧", english: "fog" },
            { pinyin: "fēng", simplified: "风", traditional: "風", english: "wind" },
            { pinyin: "léi", simplified: "雷", traditional: "雷", english: "thunder" },
            { pinyin: "shǎndiàn", simplified: "闪电", traditional: "閃電", english: "lightning" },
            { pinyin: "cǎihóng", simplified: "彩虹", traditional: "彩虹", english: "rainbow" },
            { pinyin: "chūntiān", simplified: "春天", traditional: "春天", english: "spring" },
            { pinyin: "xiàtiān", simplified: "夏天", traditional: "夏天", english: "summer" },
            { pinyin: "qiūtiān", simplified: "秋天", traditional: "秋天", english: "autumn/fall" },
            { pinyin: "dōngtiān", simplified: "冬天", traditional: "冬天", english: "winter" },
            { pinyin: "jìjié", simplified: "季节", traditional: "季節", english: "season" },
            { pinyin: "wēndù", simplified: "温度", traditional: "溫度", english: "temperature" },
            { pinyin: "rè", simplified: "热", traditional: "熱", english: "hot" },
            { pinyin: "lěng", simplified: "冷", traditional: "冷", english: "cold" },
            { pinyin: "wēnnuǎn", simplified: "温暖", traditional: "溫暖", english: "warm" },
            { pinyin: "liángkuai", simplified: "凉快", traditional: "涼快", english: "cool" },
            { pinyin: "gānzào", simplified: "干燥", traditional: "乾燥", english: "dry" },
            { pinyin: "chāoshī", simplified: "潮湿", traditional: "潮濕", english: "humid/moist" },
            { pinyin: "qíngtiān", simplified: "晴天", traditional: "晴天", english: "sunny day" },
            { pinyin: "yīntiān", simplified: "阴天", traditional: "陰天", english: "cloudy day" },
            { pinyin: "xiàyǔ", simplified: "下雨", traditional: "下雨", english: "rain (verb)" },
            { pinyin: "xiàxuě", simplified: "下雪", traditional: "下雪", english: "snow (verb)" },
            { pinyin: "guāfēng", simplified: "刮风", traditional: "刮風", english: "windy" },
            { pinyin: "dǎléi", simplified: "打雷", traditional: "打雷", english: "thunder (verb)" },
            { pinyin: "biànhuà", simplified: "变化", traditional: "變化", english: "change" },
            { pinyin: "yùbào", simplified: "预报", traditional: "預報", english: "forecast" }
        ],
        sentences: [
            { 
                simplified: "今天天气很好。", 
                pinyin: "Jīntiān tiānqì hěn hǎo.", 
                english: "The weather is very good today." 
            },
            { 
                simplified: "明天会下雨吗？", 
                pinyin: "Míngtiān huì xiàyǔ ma?", 
                english: "Will it rain tomorrow?" 
            },
            { 
                simplified: "春天的天气很温暖。", 
                pinyin: "Chūntiān de tiānqì hěn wēnnuǎn.", 
                english: "The weather in spring is very warm." 
            },
            { 
                simplified: "夏天太阳很大。", 
                pinyin: "Xiàtiān tàiyáng hěn dà.", 
                english: "The sun is very strong in summer." 
            },
            { 
                simplified: "秋天树叶变黄了。", 
                pinyin: "Qiūtiān shùyè biàn huáng le.", 
                english: "The leaves turn yellow in autumn." 
            },
            { 
                simplified: "冬天经常下雪。", 
                pinyin: "Dōngtiān jīngcháng xiàxuě.", 
                english: "It often snows in winter." 
            },
            { 
                simplified: "昨天晚上打雷了。", 
                pinyin: "Zuótiān wǎnshang dǎléi le.", 
                english: "It thundered last night." 
            },
            { 
                simplified: "天空中有很多云。", 
                pinyin: "Tiānkōng zhōng yǒu hěn duō yún.", 
                english: "There are many clouds in the sky." 
            },
            { 
                simplified: "雨后出现了彩虹。", 
                pinyin: "Yǔhòu chūxiàn le cǎihóng.", 
                english: "A rainbow appeared after the rain." 
            },
            { 
                simplified: "今天气温很高。", 
                pinyin: "Jīntiān qìwēn hěn gāo.", 
                english: "The temperature is very high today." 
            },
            { 
                simplified: "这里的气候很干燥。", 
                pinyin: "Zhèlǐ de qìhòu hěn gānzào.", 
                english: "The climate here is very dry." 
            },
            { 
                simplified: "外面刮风了。", 
                pinyin: "Wàimiàn guāfēng le.", 
                english: "It's windy outside." 
            },
            { 
                simplified: "月亮今晚很亮。", 
                pinyin: "Yuèliàng jīnwǎn hěn liàng.", 
                english: "The moon is very bright tonight." 
            },
            { 
                simplified: "星星在天空中闪烁。", 
                pinyin: "Xīngxing zài tiānkōng zhōng shǎnshuò.", 
                english: "The stars are twinkling in the sky." 
            },
            { 
                simplified: "早上有雾，看不清楚。", 
                pinyin: "Zǎoshang yǒu wù, kàn bù qīngchu.", 
                english: "There's fog in the morning, can't see clearly." 
            },
            { 
                simplified: "冰雪融化了。", 
                pinyin: "Bīngxuě rónghuà le.", 
                english: "The ice and snow have melted." 
            },
            { 
                simplified: "今天是阴天。", 
                pinyin: "Jīntiān shì yīntiān.", 
                english: "Today is cloudy." 
            },
            { 
                simplified: "明天是晴天。", 
                pinyin: "Míngtiān shì qíngtiān.", 
                english: "Tomorrow will be sunny." 
            },
            { 
                simplified: "这里夏天很热。", 
                pinyin: "Zhèlǐ xiàtiān hěn rè.", 
                english: "It's very hot here in summer." 
            },
            { 
                simplified: "冬天太冷了。", 
                pinyin: "Dōngtiān tài lěng le.", 
                english: "Winter is too cold." 
            },
            { 
                simplified: "春天既不冷也不热。", 
                pinyin: "Chūntiān jì bù lěng yě bù rè.", 
                english: "Spring is neither cold nor hot." 
            },
            { 
                simplified: "秋天很凉快。", 
                pinyin: "Qiūtiān hěn liángkuai.", 
                english: "Autumn is very cool." 
            },
            { 
                simplified: "天气预报说明天下雨。", 
                pinyin: "Tiānqì yùbào shuō míngtiān xiàyǔ.", 
                english: "The weather forecast says it will rain tomorrow." 
            },
            { 
                simplified: "南方比北方潮湿。", 
                pinyin: "Nánfāng bǐ běifāng chāoshī.", 
                english: "The south is more humid than the north." 
            },
            { 
                simplified: "一年有四个季节。", 
                pinyin: "Yī nián yǒu sì gè jìjié.", 
                english: "There are four seasons in a year." 
            },
            { 
                simplified: "天气变化很快。", 
                pinyin: "Tiānqì biànhuà hěn kuài.", 
                english: "The weather changes very quickly." 
            },
            { 
                simplified: "闪电很亮，雷声很响。", 
                pinyin: "Shǎndiàn hěn liàng, léishēng hěn xiǎng.", 
                english: "The lightning is bright and the thunder is loud." 
            },
            { 
                simplified: "我喜欢温暖的天气。", 
                pinyin: "Wǒ xǐhuān wēnnuǎn de tiānqì.", 
                english: "I like warm weather." 
            },
            { 
                simplified: "今天温度是二十度。", 
                pinyin: "Jīntiān wēndù shì èrshí dù.", 
                english: "Today's temperature is twenty degrees." 
            },
            { 
                simplified: "天气影响我们的心情。", 
                pinyin: "Tiānqì yǐngxiǎng wǒmen de xīnqíng.", 
                english: "Weather affects our mood." 
            }
        ]
    },
    
    7: {
        title: "Body Parts and Health",
        vocabulary: [
            { pinyin: "shēntǐ", simplified: "身体", traditional: "身體", english: "body" },
            { pinyin: "tóu", simplified: "头", traditional: "頭", english: "head" },
            { pinyin: "liǎn", simplified: "脸", traditional: "臉", english: "face" },
            { pinyin: "yǎnjīng", simplified: "眼睛", traditional: "眼睛", english: "eyes" },
            { pinyin: "ěrduo", simplified: "耳朵", traditional: "耳朵", english: "ears" },
            { pinyin: "bízi", simplified: "鼻子", traditional: "鼻子", english: "nose" },
            { pinyin: "zuǐ", simplified: "嘴", traditional: "嘴", english: "mouth" },
            { pinyin: "yáchǐ", simplified: "牙齿", traditional: "牙齒", english: "teeth" },
            { pinyin: "bózi", simplified: "脖子", traditional: "脖子", english: "neck" },
            { pinyin: "jiānbǎng", simplified: "肩膀", traditional: "肩膀", english: "shoulder" },
            { pinyin: "shǒu", simplified: "手", traditional: "手", english: "hand" },
            { pinyin: "shǒuzhǐ", simplified: "手指", traditional: "手指", english: "finger" },
            { pinyin: "gēbo", simplified: "胳膊", traditional: "胳膊", english: "arm" },
            { pinyin: "tuǐ", simplified: "腿", traditional: "腿", english: "leg" },
            { pinyin: "jiǎo", simplified: "脚", traditional: "腳", english: "foot" },
            { pinyin: "xīnzàng", simplified: "心脏", traditional: "心臟", english: "heart" },
            { pinyin: "fèi", simplified: "肺", traditional: "肺", english: "lungs" },
            { pinyin: "wèi", simplified: "胃", traditional: "胃", english: "stomach" },
            { pinyin: "xuè", simplified: "血", traditional: "血", english: "blood" },
            { pinyin: "jiànkāng", simplified: "健康", traditional: "健康", english: "healthy" },
            { pinyin: "shēngbìng", simplified: "生病", traditional: "生病", english: "get sick" },
            { pinyin: "gǎnmào", simplified: "感冒", traditional: "感冒", english: "cold/flu" },
            { pinyin: "fāshāo", simplified: "发烧", traditional: "發燒", english: "have a fever" },
            { pinyin: "kāisāi", simplified: "咳嗽", traditional: "咳嗽", english: "cough" },
            { pinyin: "tóutòng", simplified: "头痛", traditional: "頭痛", english: "headache" },
            { pinyin: "dùzi tòng", simplified: "肚子痛", traditional: "肚子痛", english: "stomachache" },
            { pinyin: "yīshēng", simplified: "医生", traditional: "醫生", english: "doctor" },
            { pinyin: "yīyuàn", simplified: "医院", traditional: "醫院", english: "hospital" },
            { pinyin: "yào", simplified: "药", traditional: "藥", english: "medicine" },
            { pinyin: "zhěnduàn", simplified: "诊断", traditional: "診斷", english: "diagnosis" },
            { pinyin: "zhìliáo", simplified: "治疗", traditional: "治療", english: "treatment" },
            { pinyin: "jiǎnchá", simplified: "检查", traditional: "檢查", english: "examination" },
            { pinyin: "shòushāng", simplified: "受伤", traditional: "受傷", english: "get injured" },
            { pinyin: "téng", simplified: "疼", traditional: "疼", english: "hurt/pain" },
            { pinyin: "lèi", simplified: "累", traditional: "累", english: "tired" },
            { pinyin: "xiūxi", simplified: "休息", traditional: "休息", english: "rest" },
            { pinyin: "duànliàn", simplified: "锻炼", traditional: "鍛煉", english: "exercise" },
            { pinyin: "yùndòng", simplified: "运动", traditional: "運動", english: "sports/exercise" },
            { pinyin: "bǎoyǎng", simplified: "保养", traditional: "保養", english: "maintain/care for" },
            { pinyin: "zhùyì", simplified: "注意", traditional: "注意", english: "pay attention to" }
        ],
        sentences: [
            { 
                simplified: "我的身体很健康。", 
                pinyin: "Wǒ de shēntǐ hěn jiànkāng.", 
                english: "My body is very healthy." 
            },
            { 
                simplified: "他的头很大。", 
                pinyin: "Tā de tóu hěn dà.", 
                english: "His head is very big." 
            },
            { 
                simplified: "她有一张漂亮的脸。", 
                pinyin: "Tā yǒu yī zhāng piàoliang de liǎn.", 
                english: "She has a beautiful face." 
            },
            { 
                simplified: "我的眼睛有点儿近视。", 
                pinyin: "Wǒ de yǎnjīng yǒudiǎnr jìnshì.", 
                english: "My eyes are a bit nearsighted." 
            },
            { 
                simplified: "请用耳朵仔细听。", 
                pinyin: "Qǐng yòng ěrduo zǐxì tīng.", 
                english: "Please listen carefully with your ears." 
            },
            { 
                simplified: "他的鼻子很高。", 
                pinyin: "Tā de bízi hěn gāo.", 
                english: "His nose is very high." 
            },
            { 
                simplified: "张开嘴说话。", 
                pinyin: "Zhāngkāi zuǐ shuōhuà.", 
                english: "Open your mouth to speak." 
            },
            { 
                simplified: "我每天刷牙齿。", 
                pinyin: "Wǒ měitiān shuā yáchǐ.", 
                english: "I brush my teeth every day." 
            },
            { 
                simplified: "脖子有点儿痛。", 
                pinyin: "Bózi yǒudiǎnr tòng.", 
                english: "My neck hurts a little." 
            },
            { 
                simplified: "肩膀很酸。", 
                pinyin: "Jiānbǎng hěn suān.", 
                english: "My shoulders are very sore." 
            },
            { 
                simplified: "用手拿东西。", 
                pinyin: "Yòng shǒu ná dōngxi.", 
                english: "Use your hands to take things." 
            },
            { 
                simplified: "手指被刀切到了。", 
                pinyin: "Shǒuzhǐ bèi dāo qiēdào le.", 
                english: "My finger was cut by a knife." 
            },
            { 
                simplified: "胳膊抬不起来。", 
                pinyin: "Gēbo tái bù qǐlai.", 
                english: "I can't lift my arm." 
            },
            { 
                simplified: "腿走路时很疼。", 
                pinyin: "Tuǐ zǒulù shí hěn téng.", 
                english: "My legs hurt when walking." 
            },
            { 
                simplified: "脚上有个伤口。", 
                pinyin: "Jiǎo shàng yǒu gè shāngkǒu.", 
                english: "There's a wound on my foot." 
            },
            { 
                simplified: "心脏跳得很快。", 
                pinyin: "Xīnzàng tiào de hěn kuài.", 
                english: "My heart is beating very fast." 
            },
            { 
                simplified: "肺部有点儿问题。", 
                pinyin: "Fèibù yǒudiǎnr wèntí.", 
                english: "There's a slight problem with my lungs." 
            },
            { 
                simplified: "胃不太舒服。", 
                pinyin: "Wèi bù tài shūfu.", 
                english: "My stomach doesn't feel well." 
            },
            { 
                simplified: "血压有点儿高。", 
                pinyin: "Xuèyā yǒudiǎnr gāo.", 
                english: "My blood pressure is a bit high." 
            },
            { 
                simplified: "保持健康很重要。", 
                pinyin: "Bǎochí jiànkāng hěn zhòngyào.", 
                english: "Maintaining health is very important." 
            },
            { 
                simplified: "我昨天生病了。", 
                pinyin: "Wǒ zuótiān shēngbìng le.", 
                english: "I got sick yesterday." 
            },
            { 
                simplified: "感冒了要多喝水。", 
                pinyin: "Gǎnmào le yào duō hē shuǐ.", 
                english: "When you have a cold, you should drink more water." 
            },
            { 
                simplified: "孩子发烧了。", 
                pinyin: "Háizi fāshāo le.", 
                english: "The child has a fever." 
            },
            { 
                simplified: "咳嗽得很厉害。", 
                pinyin: "Kāisāi de hěn lìhai.", 
                english: "The cough is very severe." 
            },
            { 
                simplified: "头痛得睡不着。", 
                pinyin: "Tóutòng de shuì bù zháo.", 
                english: "The headache is so bad I can't sleep." 
            },
            { 
                simplified: "肚子痛要看医生。", 
                pinyin: "Dùzi tòng yào kàn yīshēng.", 
                english: "You should see a doctor for stomachache." 
            },
            { 
                simplified: "医生说我很健康。", 
                pinyin: "Yīshēng shuō wǒ hěn jiànkāng.", 
                english: "The doctor says I'm very healthy." 
            },
            { 
                simplified: "去医院做检查。", 
                pinyin: "Qù yīyuàn zuò jiǎnchá.", 
                english: "Go to the hospital for an examination." 
            },
            { 
                simplified: "这种药很有效。", 
                pinyin: "Zhè zhǒng yào hěn yǒuxiào.", 
                english: "This medicine is very effective." 
            },
            { 
                simplified: "需要进一步治疗。", 
                pinyin: "Xūyào jìnyībù zhìliáo.", 
                english: "Further treatment is needed." 
            },
            { 
                simplified: "运动时受伤了。", 
                pinyin: "Yùndòng shí shòushāng le.", 
                english: "I got injured while exercising." 
            },
            { 
                simplified: "哪里疼就按哪里。", 
                pinyin: "Nǎlǐ téng jiù àn nǎlǐ.", 
                english: "Press wherever it hurts." 
            },
            { 
                simplified: "工作太累了。", 
                pinyin: "Gōngzuò tài lèi le.", 
                english: "Work is too tiring." 
            },
            { 
                simplified: "应该多休息。", 
                pinyin: "Yīnggāi duō xiūxi.", 
                english: "You should rest more." 
            },
            { 
                simplified: "每天锻炼身体。", 
                pinyin: "Měitiān duànliàn shēntǐ.", 
                english: "Exercise your body every day." 
            },
            { 
                simplified: "运动对健康有好处。", 
                pinyin: "Yùndòng duì jiànkāng yǒu hǎochù.", 
                english: "Exercise is good for health." 
            },
            { 
                simplified: "要好好保养身体。", 
                pinyin: "Yào hǎohāo bǎoyǎng shēntǐ.", 
                english: "You should take good care of your body." 
            },
            { 
                simplified: "注意饮食健康。", 
                pinyin: "Zhùyì yǐnshí jiànkāng.", 
                english: "Pay attention to a healthy diet." 
            },
            { 
                simplified: "身体是最重要的。", 
                pinyin: "Shēntǐ shì zuì zhòngyào de.", 
                english: "Health is the most important thing." 
            },
            { 
                simplified: "要定期体检。", 
                pinyin: "Yào dìngqī tǐjiǎn.", 
                english: "Regular health checkups are necessary." 
            }
        ]
    },
    
    8: {
        title: "Numbers and Time",
        vocabulary: [
            { pinyin: "líng", simplified: "零", traditional: "零", english: "zero" },
            { pinyin: "yī", simplified: "一", traditional: "一", english: "one" },
            { pinyin: "èr", simplified: "二", traditional: "二", english: "two" },
            { pinyin: "sān", simplified: "三", traditional: "三", english: "three" },
            { pinyin: "sì", simplified: "四", traditional: "四", english: "four" },
            { pinyin: "wǔ", simplified: "五", traditional: "五", english: "five" },
            { pinyin: "liù", simplified: "六", traditional: "六", english: "six" },
            { pinyin: "qī", simplified: "七", traditional: "七", english: "seven" },
            { pinyin: "bā", simplified: "八", traditional: "八", english: "eight" },
            { pinyin: "jiǔ", simplified: "九", traditional: "九", english: "nine" },
            { pinyin: "shí", simplified: "十", traditional: "十", english: "ten" },
            { pinyin: "bǎi", simplified: "百", traditional: "百", english: "hundred" },
            { pinyin: "qiān", simplified: "千", traditional: "千", english: "thousand" },
            { pinyin: "wàn", simplified: "万", traditional: "萬", english: "ten thousand" },
            { pinyin: "dì", simplified: "第", traditional: "第", english: "ordinal prefix (first, second, etc.)" },
            { pinyin: "shíjiān", simplified: "时间", traditional: "時間", english: "time" },
            { pinyin: "diǎn", simplified: "点", traditional: "點", english: "o'clock/point" },
            { pinyin: "fēn", simplified: "分", traditional: "分", english: "minute" },
            { pinyin: "miǎo", simplified: "秒", traditional: "秒", english: "second" },
            { pinyin: "xiǎoshí", simplified: "小时", traditional: "小時", english: "hour" },
            { pinyin: "tiān", simplified: "天", traditional: "天", english: "day" },
            { pinyin: "xīngqī", simplified: "星期", traditional: "星期", english: "week" },
            { pinyin: "yuè", simplified: "月", traditional: "月", english: "month" },
            { pinyin: "nián", simplified: "年", traditional: "年", english: "year" },
            { pinyin: "jīntiān", simplified: "今天", traditional: "今天", english: "today" },
            { pinyin: "zuótiān", simplified: "昨天", traditional: "昨天", english: "yesterday" },
            { pinyin: "míngtiān", simplified: "明天", traditional: "明天", english: "tomorrow" },
            { pinyin: "xiànzài", simplified: "现在", traditional: "現在", english: "now" },
            { pinyin: "yǐqián", simplified: "以前", traditional: "以前", english: "before/previously" },
            { pinyin: "yǐhòu", simplified: "以后", traditional: "以後", english: "after/later" },
            { pinyin: "zǎoshang", simplified: "早上", traditional: "早上", english: "morning" },
            { pinyin: "shàngwǔ", simplified: "上午", traditional: "上午", english: "forenoon/AM" },
            { pinyin: "zhōngwǔ", simplified: "中午", traditional: "中午", english: "noon" },
            { pinyin: "xiàwǔ", simplified: "下午", traditional: "下午", english: "afternoon/PM" },
            { pinyin: "wǎnshang", simplified: "晚上", traditional: "晚上", english: "evening/night" },
            { pinyin: "bànyè", simplified: "半夜", traditional: "半夜", english: "midnight" },
            { pinyin: "kāishǐ", simplified: "开始", traditional: "開始", english: "start/begin" },
            { pinyin: "jiéshù", simplified: "结束", traditional: "結束", english: "end/finish" },
            { pinyin: "kuài", simplified: "快", traditional: "快", english: "fast/quick" },
            { pinyin: "màn", simplified: "慢", traditional: "慢", english: "slow" },
            { pinyin: "zǎo", simplified: "早", traditional: "早", english: "early" },
            { pinyin: "wǎn", simplified: "晚", traditional: "晚", english: "late" },
            { pinyin: "zhōngtóu", simplified: "钟头", traditional: "鐘頭", english: "hour (duration)" },
            { pinyin: "bàn", simplified: "半", traditional: "半", english: "half" },
            { pinyin: "kè", simplified: "刻", traditional: "刻", english: "quarter (15 minutes)" },
            { pinyin: "duōshao", simplified: "多少", traditional: "多少", english: "how many/how much" },
            { pinyin: "jǐ", simplified: "几", traditional: "幾", english: "how many (small number)" },
            { pinyin: "shǒuxiān", simplified: "首先", traditional: "首先", english: "first/firstly" },
            { pinyin: "ránhòu", simplified: "然后", traditional: "然後", english: "then/afterwards" },
            { pinyin: "zuìhòu", simplified: "最后", traditional: "最後", english: "finally/last" },
            { pinyin: "cóng", simplified: "从", traditional: "從", english: "from" },
            { pinyin: "dào", simplified: "到", traditional: "到", english: "to/until" },
            { pinyin: "tíqián", simplified: "提前", traditional: "提前", english: "ahead of time" },
            { pinyin: "tuīchí", simplified: "推迟", traditional: "推遲", english: "postpone/delay" },
            { pinyin: "zhǔnshí", simplified: "准时", traditional: "準時", english: "on time/punctual" },
            { pinyin: "chídào", simplified: "迟到", traditional: "遲到", english: "late/be late" },
            { pinyin: "suíshí", simplified: "随时", traditional: "隨時", english: "at any time" },
            { pinyin: "dàngshí", simplified: "当时", traditional: "當時", english: "at that time" },
            { pinyin: "zhèngzài", simplified: "正在", traditional: "正在", english: "in the process of" },
            { pinyin: "jìxù", simplified: "继续", traditional: "繼續", english: "continue" },
            { pinyin: "tíngzhǐ", simplified: "停止", traditional: "停止", english: "stop/cease" }
        ],
        sentences: [
            { 
                simplified: "现在是下午三点半。", 
                pinyin: "Xiànzài shì xiàwǔ sān diǎn bàn.", 
                english: "It's 3:30 PM now." 
            },
            { 
                simplified: "我每天七点起床。", 
                pinyin: "Wǒ měitiān qī diǎn qǐchuáng.", 
                english: "I get up at 7 o'clock every day." 
            },
            { 
                simplified: "这个会议开始了十分钟。", 
                pinyin: "Zhè gè huìyì kāishǐ le shí fēnzhōng.", 
                english: "This meeting started ten minutes ago." 
            },
            { 
                simplified: "今天是星期五。", 
                pinyin: "Jīntiān shì xīngqīwǔ.", 
                english: "Today is Friday." 
            },
            { 
                simplified: "他昨天晚上十一点睡觉。", 
                pinyin: "Tā zuótiān wǎnshang shíyī diǎn shuìjiào.", 
                english: "He went to bed at 11 PM last night." 
            },
            { 
                simplified: "明天上午我有两个小时的课。", 
                pinyin: "Míngtiān shàngwǔ wǒ yǒu liǎng gè xiǎoshí de kè.", 
                english: "I have a two-hour class tomorrow morning." 
            },
            { 
                simplified: "一年有十二个月。", 
                pinyin: "Yī nián yǒu shí'èr gè yuè.", 
                english: "A year has twelve months." 
            },
            { 
                simplified: "我们从九点到十二点工作。", 
                pinyin: "Wǒmen cóng jiǔ diǎn dào shí'èr diǎn gōngzuò.", 
                english: "We work from 9 o'clock to 12 o'clock." 
            },
            { 
                simplified: "他总是准时到达办公室。", 
                pinyin: "Tā zǒngshì zhǔnshí dàodá bàngōngshì.", 
                english: "He always arrives at the office on time." 
            },
            { 
                simplified: "这个月是二月。", 
                pinyin: "Zhè gè yuè shì èryuè.", 
                english: "This month is February." 
            },
            { 
                simplified: "我等了你半个小时。", 
                pinyin: "Wǒ děng le nǐ bàn gè xiǎoshí.", 
                english: "I waited for you for half an hour." 
            },
            { 
                simplified: "时间过得真快！", 
                pinyin: "Shíjiān guò de zhēn kuài!", 
                english: "Time passes so quickly!" 
            },
            { 
                simplified: "中午十二点我们去吃饭。", 
                pinyin: "Zhōngwǔ shí'èr diǎn wǒmen qù chīfān.", 
                english: "We'll go eat at 12 noon." 
            },
            { 
                simplified: "他今年二十五岁。", 
                pinyin: "Tā jīnnián èrshíwǔ suì.", 
                english: "He is 25 years old this year." 
            },
            { 
                simplified: "这是我第一次来中国。", 
                pinyin: "Zhè shì wǒ dì-yī cì lái Zhōngguó.", 
                english: "This is my first time coming to China." 
            },
            { 
                simplified: "我们晚上八点见面。", 
                pinyin: "Wǒmen wǎnshang bā diǎn jiànmiàn.", 
                english: "We'll meet at 8 PM." 
            },
            { 
                simplified: "他每个星期工作五天。", 
                pinyin: "Tā měi gè xīngqī gōngzuò wǔ tiān.", 
                english: "He works five days every week." 
            },
            { 
                simplified: "还有三分钟就到了。", 
                pinyin: "Hái yǒu sān fēnzhōng jiù dào le.", 
                english: "We'll arrive in three more minutes." 
            },
            { 
                simplified: "以前我不知道这件事。", 
                pinyin: "Yǐqián wǒ bù zhīdào zhè jiàn shì.", 
                english: "I didn't know about this before." 
            },
            { 
                simplified: "他迟到了十五分钟。", 
                pinyin: "Tā chídào le shíwǔ fēnzhōng.", 
                english: "He was fifteen minutes late." 
            },
            { 
                simplified: "我们需要提前半小时出发。", 
                pinyin: "Wǒmen xūyào tíqián bàn xiǎoshí chūfā.", 
                english: "We need to leave half an hour early." 
            },
            { 
                simplified: "一个小时有六十分钟。", 
                pinyin: "Yī gè xiǎoshí yǒu liùshí fēnzhōng.", 
                english: "One hour has sixty minutes." 
            },
            { 
                simplified: "他们正在开会。", 
                pinyin: "Tāmen zhèngzài kāihuì.", 
                english: "They are having a meeting." 
            },
            { 
                simplified: "这个项目将在下个月结束。", 
                pinyin: "Zhè gè xiàngmù jiāng zài xià gè yuè jiéshù.", 
                english: "This project will end next month." 
            },
            { 
                simplified: "我们可以随时联系。", 
                pinyin: "Wǒmen kěyǐ suíshí liánxì.", 
                english: "We can contact each other at any time." 
            },
            { 
                simplified: "首先我们要准备材料。", 
                pinyin: "Shǒuxiān wǒmen yào zhǔnbèi cáiliào.", 
                english: "First, we need to prepare the materials." 
            },
            { 
                simplified: "然后我们开始工作。", 
                pinyin: "Ránhòu wǒmen kāishǐ gōngzuò.", 
                english: "Then we start working." 
            },
            { 
                simplified: "最后我们检查结果。", 
                pinyin: "Zuìhòu wǒmen jiǎnchá jiéguǒ.", 
                english: "Finally, we check the results." 
            },
            { 
                simplified: "当时我很忙。", 
                pinyin: "Dāngshí wǒ hěn máng.", 
                english: "I was very busy at that time." 
            },
            { 
                simplified: "时间不够，我们继续明天做。", 
                pinyin: "Shíjiān bù gòu, wǒmen jìxù míngtiān zuò.", 
                english: "There's not enough time, we'll continue tomorrow." 
            }
        ]
    },
    
    9: {
        title: "Animals and Nature",
        vocabulary: [
            { pinyin: "dōngwù", simplified: "动物", traditional: "動物", english: "animal" },
            { pinyin: "māo", simplified: "猫", traditional: "貓", english: "cat" },
            { pinyin: "gǒu", simplified: "狗", traditional: "狗", english: "dog" },
            { pinyin: "niǎo", simplified: "鸟", traditional: "鳥", english: "bird" },
            { pinyin: "yú", simplified: "鱼", traditional: "魚", english: "fish" },
            { pinyin: "mǎ", simplified: "马", traditional: "馬", english: "horse" },
            { pinyin: "niú", simplified: "牛", traditional: "牛", english: "cow/bull" },
            { pinyin: "zhū", simplified: "猪", traditional: "豬", english: "pig" },
            { pinyin: "yáng", simplified: "羊", traditional: "羊", english: "sheep/goat" },
            { pinyin: "jī", simplified: "鸡", traditional: "雞", english: "chicken" },
            { pinyin: "yā", simplified: "鸭", traditional: "鴨", english: "duck" },
            { pinyin: "lǎohǔ", simplified: "老虎", traditional: "老虎", english: "tiger" },
            { pinyin: "shīzi", simplified: "狮子", traditional: "獅子", english: "lion" },
            { pinyin: "dàxiàng", simplified: "大象", traditional: "大象", english: "elephant" },
            { pinyin: "hóuzi", simplified: "猴子", traditional: "猴子", english: "monkey" },
            { pinyin: "xióngmāo", simplified: "熊猫", traditional: "熊貓", english: "panda" },
            { pinyin: "tùzi", simplified: "兔子", traditional: "兔子", english: "rabbit" },
            { pinyin: "lǎoshǔ", simplified: "老鼠", traditional: "老鼠", english: "mouse/rat" },
            { pinyin: "shé", simplified: "蛇", traditional: "蛇", english: "snake" },
            { pinyin: "qīngwā", simplified: "青蛙", traditional: "青蛙", english: "frog" },
            { pinyin: "kūnchóng", simplified: "昆虫", traditional: "昆蟲", english: "insect" },
            { pinyin: "húdié", simplified: "蝴蝶", traditional: "蝴蝶", english: "butterfly" },
            { pinyin: "mìfēng", simplified: "蜜蜂", traditional: "蜜蜂", english: "bee" },
            { pinyin: "zhízhū", simplified: "蜘蛛", traditional: "蜘蛛", english: "spider" },
            { pinyin: "zìrán", simplified: "自然", traditional: "自然", english: "nature" },
            { pinyin: "sēnlín", simplified: "森林", traditional: "森林", english: "forest" },
            { pinyin: "shù", simplified: "树", traditional: "樹", english: "tree" },
            { pinyin: "huā", simplified: "花", traditional: "花", english: "flower" },
            { pinyin: "cǎo", simplified: "草", traditional: "草", english: "grass" },
            { pinyin: "yèzi", simplified: "叶子", traditional: "葉子", english: "leaf" },
            { pinyin: "zhītiáo", simplified: "枝条", traditional: "枝條", english: "branch" },
            { pinyin: "gēnbu", simplified: "根部", traditional: "根部", english: "root" },
            { pinyin: "zhǒngzi", simplified: "种子", traditional: "種子", english: "seed" },
            { pinyin: "shuǐguǒ", simplified: "水果", traditional: "水果", english: "fruit" },
            { pinyin: "hé", simplified: "河", traditional: "河", english: "river" },
            { pinyin: "hú", simplified: "湖", traditional: "湖", english: "lake" },
            { pinyin: "hǎi", simplified: "海", traditional: "海", english: "sea/ocean" },
            { pinyin: "shān", simplified: "山", traditional: "山", english: "mountain" },
            { pinyin: "tǔdì", simplified: "土地", traditional: "土地", english: "land/soil" },
            { pinyin: "shítou", simplified: "石头", traditional: "石頭", english: "stone/rock" },
            { pinyin: "huánjìng", simplified: "环境", traditional: "環境", english: "environment" },
            { pinyin: "kōngqì", simplified: "空气", traditional: "空氣", english: "air" },
            { pinyin: "yángguāng", simplified: "阳光", traditional: "陽光", english: "sunlight" },
            { pinyin: "fēng", simplified: "风", traditional: "風", english: "wind" },
            { pinyin: "yǔ", simplified: "雨", traditional: "雨", english: "rain" }
        ],
        sentences: [
            { 
                simplified: "我家养了一只猫和一条狗。", 
                pinyin: "Wǒ jiā yǎng le yī zhī māo hé yī tiáo gǒu.", 
                english: "My family has a cat and a dog." 
            },
            { 
                simplified: "鸟儿在树上唱歌。", 
                pinyin: "Niǎo'ér zài shù shàng chànggē.", 
                english: "Birds are singing in the trees." 
            },
            { 
                simplified: "鱼在水里游泳。", 
                pinyin: "Yú zài shuǐ lǐ yóuyǒng.", 
                english: "Fish are swimming in the water." 
            },
            { 
                simplified: "马跑得很快。", 
                pinyin: "Mǎ pǎo de hěn kuài.", 
                english: "Horses run very fast." 
            },
            { 
                simplified: "农民养了很多牛和羊。", 
                pinyin: "Nóngmín yǎng le hěn duō niú hé yáng.", 
                english: "The farmer raises many cows and sheep." 
            },
            { 
                simplified: "猪很聪明，不是笨动物。", 
                pinyin: "Zhū hěn cōngmíng, bù shì bèn dōngwù.", 
                english: "Pigs are smart, not stupid animals." 
            },
            { 
                simplified: "母鸡每天下蛋。", 
                pinyin: "Mǔjī měitiān xiàdàn.", 
                english: "Hens lay eggs every day." 
            },
            { 
                simplified: "鸭子喜欢在水里玩。", 
                pinyin: "Yāzi xǐhuān zài shuǐ lǐ wán.", 
                english: "Ducks like to play in the water." 
            },
            { 
                simplified: "老虎是很危险的动物。", 
                pinyin: "Lǎohǔ shì hěn wēixiǎn de dōngwù.", 
                english: "Tigers are very dangerous animals." 
            },
            { 
                simplified: "狮子被称为森林之王。", 
                pinyin: "Shīzi bèi chēngwéi sēnlín zhī wáng.", 
                english: "Lions are called the king of the forest." 
            },
            { 
                simplified: "大象的鼻子很长。", 
                pinyin: "Dàxiàng de bízi hěn cháng.", 
                english: "Elephants have very long trunks." 
            },
            { 
                simplified: "猴子很会爬树。", 
                pinyin: "Hóuzi hěn huì páshù.", 
                english: "Monkeys are very good at climbing trees." 
            },
            { 
                simplified: "熊猫是中国的国宝。", 
                pinyin: "Xióngmāo shì Zhōngguó de guóbǎo.", 
                english: "Pandas are China's national treasure." 
            },
            { 
                simplified: "兔子跑得很快。", 
                pinyin: "Tùzi pǎo de hěn kuài.", 
                english: "Rabbits run very fast." 
            },
            { 
                simplified: "老鼠很小但很机灵。", 
                pinyin: "Lǎoshǔ hěn xiǎo dàn hěn jīlíng.", 
                english: "Mice are small but very clever." 
            },
            { 
                simplified: "蛇没有腿但能快速移动。", 
                pinyin: "Shé méiyǒu tuǐ dàn néng kuàisù yídòng.", 
                english: "Snakes have no legs but can move quickly." 
            },
            { 
                simplified: "青蛙可以在水里和陆地上生活。", 
                pinyin: "Qīngwā kěyǐ zài shuǐ lǐ hé lùdì shàng shēnghuó.", 
                english: "Frogs can live both in water and on land." 
            },
            { 
                simplified: "蝴蝶的翅膀很美丽。", 
                pinyin: "Húdié de chìbǎng hěn měilì.", 
                english: "Butterfly wings are very beautiful." 
            },
            { 
                simplified: "蜜蜂能制造蜂蜜。", 
                pinyin: "Mìfēng néng zhìzào fēngmì.", 
                english: "Bees can make honey." 
            },
            { 
                simplified: "蜘蛛会织网捉虫子。", 
                pinyin: "Zhízhū huì zhī wǎng zhuō chóngzi.", 
                english: "Spiders weave webs to catch insects." 
            },
            { 
                simplified: "我们应该保护自然环境。", 
                pinyin: "Wǒmen yīnggāi bǎohù zìrán huánjìng.", 
                english: "We should protect the natural environment." 
            },
            { 
                simplified: "森林里有很多野生动物。", 
                pinyin: "Sēnlín lǐ yǒu hěn duō yěshēng dōngwù.", 
                english: "There are many wild animals in the forest." 
            },
            { 
                simplified: "春天的时候树上长出新叶子。", 
                pinyin: "Chūntiān de shíhòu shù shàng zhǎng chū xīn yèzi.", 
                english: "New leaves grow on trees in spring." 
            },
            { 
                simplified: "花园里开满了美丽的花。", 
                pinyin: "Huāyuán lǐ kāi mǎn le měilì de huā.", 
                english: "The garden is full of beautiful flowers." 
            },
            { 
                simplified: "草地上的草很绿很软。", 
                pinyin: "Cǎodì shàng de cǎo hěn lǜ hěn ruǎn.", 
                english: "The grass on the lawn is very green and soft." 
            },
            { 
                simplified: "种子需要阳光和水才能发芽。", 
                pinyin: "Zhǒngzi xūyào yángguāng hé shuǐ cái néng fāyá.", 
                english: "Seeds need sunlight and water to sprout." 
            },
            { 
                simplified: "这条河很清澈，能看到鱼。", 
                pinyin: "Zhè tiáo hé hěn qīngchè, néng kàndào yú.", 
                english: "This river is very clear, you can see fish." 
            },
            { 
                simplified: "湖水在阳光下闪闪发光。", 
                pinyin: "Hú shuǐ zài yángguāng xià shǎnshǎn fāguāng.", 
                english: "The lake water sparkles in the sunlight." 
            },
            { 
                simplified: "从山顶可以看到大海。", 
                pinyin: "Cóng shāndǐng kěyǐ kàndào dàhǎi.", 
                english: "You can see the ocean from the mountaintop." 
            },
            { 
                simplified: "新鲜的空气对健康很重要。", 
                pinyin: "Xīnxiān de kōngqì duì jiànkāng hěn zhòngyào.", 
                english: "Fresh air is very important for health." 
            }
        ]
    },
    
    10: {
        title: "School and Education",
        vocabulary: [
            { pinyin: "xuéxiào", simplified: "学校", traditional: "學校", english: "school" },
            { pinyin: "xuéshēng", simplified: "学生", traditional: "學生", english: "student" },
            { pinyin: "lǎoshī", simplified: "老师", traditional: "老師", english: "teacher" },
            { pinyin: "tóngxué", simplified: "同学", traditional: "同學", english: "classmate" },
            { pinyin: "bānjí", simplified: "班级", traditional: "班級", english: "class/grade" },
            { pinyin: "jiàoshì", simplified: "教室", traditional: "教室", english: "classroom" },
            { pinyin: "kèběn", simplified: "课本", traditional: "課本", english: "textbook" },
            { pinyin: "zuòyè", simplified: "作业", traditional: "作業", english: "homework" },
            { pinyin: "kǎoshì", simplified: "考试", traditional: "考試", english: "exam/test" },
            { pinyin: "chéngji", simplified: "成绩", traditional: "成績", english: "grade/score" },
            { pinyin: "shùxué", simplified: "数学", traditional: "數學", english: "mathematics" },
            { pinyin: "yǔwén", simplified: "语文", traditional: "語文", english: "Chinese language" },
            { pinyin: "yīngyǔ", simplified: "英语", traditional: "英語", english: "English language" },
            { pinyin: "lìshǐ", simplified: "历史", traditional: "歷史", english: "history" },
            { pinyin: "dìlǐ", simplified: "地理", traditional: "地理", english: "geography" },
            { pinyin: "kēxué", simplified: "科学", traditional: "科學", english: "science" },
            { pinyin: "tǐyù", simplified: "体育", traditional: "體育", english: "physical education" },
            { pinyin: "yīnyuè", simplified: "音乐", traditional: "音樂", english: "music" },
            { pinyin: "měishù", simplified: "美术", traditional: "美術", english: "art" },
            { pinyin: "túshūguǎn", simplified: "图书馆", traditional: "圖書館", english: "library" },
            { pinyin: "bǐ", simplified: "笔", traditional: "筆", english: "pen" },
            { pinyin: "qiānbǐ", simplified: "铅笔", traditional: "鉛筆", english: "pencil" },
            { pinyin: "běnzi", simplified: "本子", traditional: "本子", english: "notebook" },
            { pinyin: "zhǐ", simplified: "纸", traditional: "紙", english: "paper" },
            { pinyin: "hēibǎn", simplified: "黑板", traditional: "黑板", english: "blackboard" },
            { pinyin: "zhuōzi", simplified: "桌子", traditional: "桌子", english: "desk/table" },
            { pinyin: "yǐzi", simplified: "椅子", traditional: "椅子", english: "chair" },
            { pinyin: "shū", simplified: "书", traditional: "書", english: "book" },
            { pinyin: "cídiǎn", simplified: "词典", traditional: "詞典", english: "dictionary" },
            { pinyin: "xuéxí", simplified: "学习", traditional: "學習", english: "to study/learn" },
            { pinyin: "jiāo", simplified: "教", traditional: "教", english: "to teach" },
            { pinyin: "wèn", simplified: "问", traditional: "問", english: "to ask" },
            { pinyin: "huídá", simplified: "回答", traditional: "回答", english: "to answer" },
            { pinyin: "jiěshì", simplified: "解释", traditional: "解釋", english: "to explain" },
            { pinyin: "fùxí", simplified: "复习", traditional: "復習", english: "to review" },
            { pinyin: "liànxí", simplified: "练习", traditional: "練習", english: "to practice" },
            { pinyin: "bìyè", simplified: "毕业", traditional: "畢業", english: "to graduate" },
            { pinyin: "shēnqǐng", simplified: "申请", traditional: "申請", english: "to apply" },
            { pinyin: "dàxué", simplified: "大学", traditional: "大學", english: "university" },
            { pinyin: "zhuānyè", simplified: "专业", traditional: "專業", english: "major/specialty" }
        ],
        sentences: [
            { 
                simplified: "我每天早上八点到学校。", 
                pinyin: "Wǒ měitiān zǎoshang bā diǎn dào xuéxiào.", 
                english: "I arrive at school at 8 o'clock every morning." 
            },
            { 
                simplified: "我们班有三十个学生。", 
                pinyin: "Wǒmen bān yǒu sānshí gè xuéshēng.", 
                english: "Our class has thirty students." 
            },
            { 
                simplified: "王老师教我们数学。", 
                pinyin: "Wáng lǎoshī jiāo wǒmen shùxué.", 
                english: "Teacher Wang teaches us mathematics." 
            },
            { 
                simplified: "我和同学一起做作业。", 
                pinyin: "Wǒ hé tóngxué yīqǐ zuò zuòyè.", 
                english: "I do homework together with my classmates." 
            },
            { 
                simplified: "明天有英语考试。", 
                pinyin: "Míngtiān yǒu yīngyǔ kǎoshì.", 
                english: "There's an English test tomorrow." 
            },
            { 
                simplified: "他的成绩很好。", 
                pinyin: "Tā de chéngji hěn hǎo.", 
                english: "His grades are very good." 
            },
            { 
                simplified: "我最喜欢上音乐课。", 
                pinyin: "Wǒ zuì xǐhuān shàng yīnyuè kè.", 
                english: "I like music class the most." 
            },
            { 
                simplified: "教室里有很多桌子和椅子。", 
                pinyin: "Jiàoshì lǐ yǒu hěn duō zhuōzi hé yǐzi.", 
                english: "There are many desks and chairs in the classroom." 
            },
            { 
                simplified: "老师在黑板上写字。", 
                pinyin: "Lǎoshī zài hēibǎn shàng xiězì.", 
                english: "The teacher writes on the blackboard." 
            },
            { 
                simplified: "我忘记带课本了。", 
                pinyin: "Wǒ wàngjì dài kèběn le.", 
                english: "I forgot to bring my textbook." 
            },
            { 
                simplified: "她用铅笔写字。", 
                pinyin: "Tā yòng qiānbǐ xiězì.", 
                english: "She writes with a pencil." 
            },
            { 
                simplified: "我在图书馆借了三本书。", 
                pinyin: "Wǒ zài túshūguǎn jiè le sān běn shū.", 
                english: "I borrowed three books from the library." 
            },
            { 
                simplified: "学生们正在认真听课。", 
                pinyin: "Xuéshēngmen zhèngzài rènzhēn tīngkè.", 
                english: "The students are listening to the class attentively." 
            },
            { 
                simplified: "我不懂这个问题，请老师解释一下。", 
                pinyin: "Wǒ bù dǒng zhège wèntí, qǐng lǎoshī jiěshì yīxià.", 
                english: "I don't understand this question, please teacher explain it." 
            },
            { 
                simplified: "考试前要复习功课。", 
                pinyin: "Kǎoshì qián yào fùxí gōngkè.", 
                english: "You need to review lessons before the exam." 
            },
            { 
                simplified: "我每天练习写汉字。", 
                pinyin: "Wǒ měitiān liànxí xiě hànzì.", 
                english: "I practice writing Chinese characters every day." 
            },
            { 
                simplified: "他明年就要毕业了。", 
                pinyin: "Tā míngnián jiù yào bìyè le.", 
                english: "He will graduate next year." 
            },
            { 
                simplified: "我想申请北京大学。", 
                pinyin: "Wǒ xiǎng shēnqǐng Běijīng Dàxué.", 
                english: "I want to apply to Peking University." 
            },
            { 
                simplified: "你学什么专业？", 
                pinyin: "Nǐ xué shénme zhuānyè?", 
                english: "What major do you study?" 
            },
            { 
                simplified: "历史课很有意思。", 
                pinyin: "Lìshǐ kè hěn yǒu yìsi.", 
                english: "History class is very interesting." 
            },
            { 
                simplified: "我们在科学课上做实验。", 
                pinyin: "Wǒmen zài kēxué kè shàng zuò shíyàn.", 
                english: "We do experiments in science class." 
            },
            { 
                simplified: "体育课上我们踢足球。", 
                pinyin: "Tǐyù kè shàng wǒmen tī zúqiú.", 
                english: "We play soccer in PE class." 
            },
            { 
                simplified: "美术老师教我们画画。", 
                pinyin: "Měishù lǎoshī jiāo wǒmen huàhuà.", 
                english: "The art teacher teaches us to draw." 
            },
            { 
                simplified: "地理课学习各国的位置。", 
                pinyin: "Dìlǐ kè xuéxí gè guó de wèizhì.", 
                english: "In geography class we learn the locations of various countries." 
            },
            { 
                simplified: "学生可以问老师问题。", 
                pinyin: "Xuéshēng kěyǐ wèn lǎoshī wèntí.", 
                english: "Students can ask the teacher questions." 
            },
            { 
                simplified: "请你回答这个问题。", 
                pinyin: "Qǐng nǐ huídá zhège wèntí.", 
                english: "Please answer this question." 
            },
            { 
                simplified: "我需要一本中文词典。", 
                pinyin: "Wǒ xūyào yī běn zhōngwén cídiǎn.", 
                english: "I need a Chinese dictionary." 
            },
            { 
                simplified: "这张纸太小了。", 
                pinyin: "Zhè zhāng zhǐ tài xiǎo le.", 
                english: "This piece of paper is too small." 
            },
            { 
                simplified: "我的本子用完了。", 
                pinyin: "Wǒ de běnzi yòng wán le.", 
                english: "My notebook is used up." 
            },
            { 
                simplified: "学习中文很有趣。", 
                pinyin: "Xuéxí zhōngwén hěn yǒuqù.", 
                english: "Learning Chinese is very interesting." 
            }
        ]
    },
    
    11: {  
        title: "Work and Professions",
        vocabulary: [
            { pinyin: "gōngzuò", simplified: "工作", traditional: "工作", english: "work/job" },
            { pinyin: "zhíyè", simplified: "职业", traditional: "職業", english: "profession/occupation" },
            { pinyin: "yīshēng", simplified: "医生", traditional: "醫生", english: "doctor" },
            { pinyin: "lǎoshī", simplified: "老师", traditional: "老師", english: "teacher" },
            { pinyin: "jǐngchá", simplified: "警察", traditional: "警察", english: "police officer" },
            { pinyin: "sījī", simplified: "司机", traditional: "司機", english: "driver" },
            { pinyin: "hùshi", simplified: "护士", traditional: "護士", english: "nurse" },
            { pinyin: "gōngchéngshī", simplified: "工程师", traditional: "工程師", english: "engineer" },
            { pinyin: "lǜshī", simplified: "律师", traditional: "律師", english: "lawyer" },
            { pinyin: "jìzhě", simplified: "记者", traditional: "記者", english: "journalist/reporter" },
            { pinyin: "shòuhuòyuán", simplified: "售货员", traditional: "售貨員", english: "sales assistant" },
            { pinyin: "fúwùyuán", simplified: "服务员", traditional: "服務員", english: "waiter/waitress" },
            { pinyin: "jīnglǐ", simplified: "经理", traditional: "經理", english: "manager" },
            { pinyin: "mìshū", simplified: "秘书", traditional: "秘書", english: "secretary" },
            { pinyin: "huìjìshī", simplified: "会计师", traditional: "會計師", english: "accountant" },
            { pinyin: "fānyì", simplified: "翻译", traditional: "翻譯", english: "translator/interpreter" },
            { pinyin: "shèjìshī", simplified: "设计师", traditional: "設計師", english: "designer" },
            { pinyin: "chúshī", simplified: "厨师", traditional: "廚師", english: "chef/cook" },
            { pinyin: "nóngmín", simplified: "农民", traditional: "農民", english: "farmer" },
            { pinyin: "gōngrén", simplified: "工人", traditional: "工人", english: "worker" },
            { pinyin: "bǎnzhǎng", simplified: "班长", traditional: "班長", english: "class monitor/team leader" },
            { pinyin: "tóngshì", simplified: "同事", traditional: "同事", english: "colleague" },
            { pinyin: "lǎobǎn", simplified: "老板", traditional: "老闆", english: "boss" },
            { pinyin: "yuángōng", simplified: "员工", traditional: "員工", english: "employee" },
            { pinyin: "gōngsī", simplified: "公司", traditional: "公司", english: "company" },
            { pinyin: "bàngōngshì", simplified: "办公室", traditional: "辦公室", english: "office" },
            { pinyin: "gōngchǎng", simplified: "工厂", traditional: "工廠", english: "factory" },
            { pinyin: "yīyuàn", simplified: "医院", traditional: "醫院", english: "hospital" },
            { pinyin: "xuéxiào", simplified: "学校", traditional: "學校", english: "school" },
            { pinyin: "yínháng", simplified: "银行", traditional: "銀行", english: "bank" }
        ],
        sentences: [
            { 
                simplified: "他在一家大公司工作。", 
                pinyin: "Tā zài yī jiā dà gōngsī gōngzuò.", 
                english: "He works at a big company." 
            },
            { 
                simplified: "我的职业是医生。", 
                pinyin: "Wǒ de zhíyè shì yīshēng.", 
                english: "My profession is doctor." 
            },
            { 
                simplified: "老师每天都很忙。", 
                pinyin: "Lǎoshī měitiān dōu hěn máng.", 
                english: "Teachers are busy every day." 
            },
            { 
                simplified: "警察帮助维护社会秩序。", 
                pinyin: "Jǐngchá bāngzhù wéihù shèhuì zhìxù.", 
                english: "Police help maintain social order." 
            },
            { 
                simplified: "司机开车很小心。", 
                pinyin: "Sījī kāichē hěn xiǎoxīn.", 
                english: "The driver drives very carefully." 
            },
            { 
                simplified: "护士照顾病人。", 
                pinyin: "Hùshi zhàogù bìngrén.", 
                english: "Nurses take care of patients." 
            },
            { 
                simplified: "工程师设计了这座桥。", 
                pinyin: "Gōngchéngshī shèjì le zhè zuò qiáo.", 
                english: "Engineers designed this bridge." 
            },
            { 
                simplified: "律师为客户提供法律服务。", 
                pinyin: "Lǜshī wèi kèhù tígōng fǎlǜ fúwù.", 
                english: "Lawyers provide legal services to clients." 
            },
            { 
                simplified: "记者采访了很多人。", 
                pinyin: "Jìzhě cǎifǎng le hěn duō rén.", 
                english: "The reporter interviewed many people." 
            },
            { 
                simplified: "售货员向顾客介绍商品。", 
                pinyin: "Shòuhuòyuán xiàng gùkè jièshào shāngpǐn.", 
                english: "The sales assistant introduces products to customers." 
            },
            { 
                simplified: "服务员的态度很好。", 
                pinyin: "Fúwùyuán de tàidù hěn hǎo.", 
                english: "The waiter's attitude is very good." 
            },
            { 
                simplified: "经理开会讨论工作计划。", 
                pinyin: "Jīnglǐ kāihuì tǎolùn gōngzuò jìhuà.", 
                english: "The manager holds meetings to discuss work plans." 
            },
            { 
                simplified: "秘书帮助老板安排日程。", 
                pinyin: "Mìshū bāngzhù lǎobǎn ānpái rìchéng.", 
                english: "The secretary helps the boss arrange the schedule." 
            },
            { 
                simplified: "会计师负责财务管理。", 
                pinyin: "Huìjìshī fùzé cáiwù guǎnlǐ.", 
                english: "Accountants are responsible for financial management." 
            },
            { 
                simplified: "翻译把中文翻译成英文。", 
                pinyin: "Fānyì bǎ zhōngwén fānyì chéng yīngwén.", 
                english: "The translator translates Chinese into English." 
            },
            { 
                simplified: "设计师创作了很多作品。", 
                pinyin: "Shèjìshī chuàngzuò le hěn duō zuòpǐn.", 
                english: "The designer created many works." 
            },
            { 
                simplified: "厨师做的菜很好吃。", 
                pinyin: "Chúshī zuò de cài hěn hǎochī.", 
                english: "The dishes made by the chef are delicious." 
            },
            { 
                simplified: "农民种植粮食和蔬菜。", 
                pinyin: "Nóngmín zhòngzhí liángshí hé shūcài.", 
                english: "Farmers grow grains and vegetables." 
            },
            { 
                simplified: "工人在工厂里生产产品。", 
                pinyin: "Gōngrén zài gōngchǎng lǐ shēngchǎn chǎnpǐn.", 
                english: "Workers produce products in the factory." 
            },
            { 
                simplified: "班长组织同学们参加活动。", 
                pinyin: "Bǎnzhǎng zǔzhī tóngxuémen cānjiā huódòng.", 
                english: "The class monitor organizes classmates to participate in activities." 
            },
            { 
                simplified: "同事之间要互相帮助。", 
                pinyin: "Tóngshì zhījiān yào hùxiāng bāngzhù.", 
                english: "Colleagues should help each other." 
            },
            { 
                simplified: "老板对员工很好。", 
                pinyin: "Lǎobǎn duì yuángōng hěn hǎo.", 
                english: "The boss is very good to employees." 
            },
            { 
                simplified: "员工要按时上班。", 
                pinyin: "Yuángōng yào ànshí shàngbān.", 
                english: "Employees must go to work on time." 
            },
            { 
                simplified: "这家公司有很多部门。", 
                pinyin: "Zhè jiā gōngsī yǒu hěn duō bùmén.", 
                english: "This company has many departments." 
            },
            { 
                simplified: "办公室里有电脑和打印机。", 
                pinyin: "Bàngōngshì lǐ yǒu diànnǎo hé dǎyìnjī.", 
                english: "There are computers and printers in the office." 
            },
            { 
                simplified: "工厂每天生产很多产品。", 
                pinyin: "Gōngchǎng měitiān shēngchǎn hěn duō chǎnpǐn.", 
                english: "The factory produces many products every day." 
            },
            { 
                simplified: "医院里有很多科室。", 
                pinyin: "Yīyuàn lǐ yǒu hěn duō kēshì.", 
                english: "There are many departments in the hospital." 
            },
            { 
                simplified: "学校需要更多的好老师。", 
                pinyin: "Xuéxiào xūyào gèng duō de hǎo lǎoshī.", 
                english: "Schools need more good teachers." 
            },
            { 
                simplified: "银行的工作时间是早九晚五。", 
                pinyin: "Yínháng de gōngzuò shíjiān shì zǎo jiǔ wǎn wǔ.", 
                english: "The bank's working hours are nine to five." 
            },
            { 
                simplified: "选择合适的职业很重要。", 
                pinyin: "Xuǎnzé héshì de zhíyè hěn zhòngyào.", 
                english: "Choosing a suitable profession is very important." 
            }
        ]
    },
    
    12: {
        title: "Shopping and Money",
        vocabulary: [
            { pinyin: "mǎi", simplified: "买", traditional: "買", english: "buy" },
            { pinyin: "mài", simplified: "卖", traditional: "賣", english: "sell" },
            { pinyin: "qián", simplified: "钱", traditional: "錢", english: "money" },
            { pinyin: "kuài", simplified: "块", traditional: "塊", english: "yuan (currency)" },
            { pinyin: "máo", simplified: "毛", traditional: "毛", english: "10 cents (currency)" },
            { pinyin: "fēn", simplified: "分", traditional: "分", english: "cent" },
            { pinyin: "jiàgé", simplified: "价格", traditional: "價格", english: "price" },
            { pinyin: "piányi", simplified: "便宜", traditional: "便宜", english: "cheap" },
            { pinyin: "guì", simplified: "贵", traditional: "貴", english: "expensive" },
            { pinyin: "shāngdiàn", simplified: "商店", traditional: "商店", english: "shop/store" },
            { pinyin: "chāoshì", simplified: "超市", traditional: "超市", english: "supermarket" },
            { pinyin: "shāngchǎng", simplified: "商场", traditional: "商場", english: "shopping mall" },
            { pinyin: "fùkuǎn", simplified: "付款", traditional: "付款", english: "pay" },
            { pinyin: "xiànqián", simplified: "现钱", traditional: "現錢", english: "cash" },
            { pinyin: "xìnyòngkǎ", simplified: "信用卡", traditional: "信用卡", english: "credit card" },
            { pinyin: "zhǎoqián", simplified: "找钱", traditional: "找錢", english: "give change" },
            { pinyin: "shōuyíngyuán", simplified: "收银员", traditional: "收銀員", english: "cashier" },
            { pinyin: "gùkè", simplified: "顾客", traditional: "顧客", english: "customer" },
            { pinyin: "tuìhuò", simplified: "退货", traditional: "退貨", english: "return goods" },
            { pinyin: "huànhuò", simplified: "换货", traditional: "換貨", english: "exchange goods" },
            { pinyin: "xiǎopiào", simplified: "小票", traditional: "小票", english: "receipt" },
            { pinyin: "dǎzhé", simplified: "打折", traditional: "打折", english: "discount" },
            { pinyin: "jiǎnjià", simplified: "减价", traditional: "減價", english: "reduce price" },
            { pinyin: "tèjià", simplified: "特价", traditional: "特價", english: "special price" },
            { pinyin: "miǎnfèi", simplified: "免费", traditional: "免費", english: "free" },
            { pinyin: "yínháng", simplified: "银行", traditional: "銀行", english: "bank" },
            { pinyin: "qǔqián", simplified: "取钱", traditional: "取錢", english: "withdraw money" },
            { pinyin: "cúnqián", simplified: "存钱", traditional: "存錢", english: "save/deposit money" },
            { pinyin: "huàn", simplified: "换", traditional: "換", english: "exchange/change" },
            { pinyin: "shì", simplified: "试", traditional: "試", english: "try" },
            { pinyin: "hésuan", simplified: "合算", traditional: "合算", english: "worthwhile/good deal" },
            { pinyin: "làngfèi", simplified: "浪费", traditional: "浪費", english: "waste" },
            { pinyin: "jiéyuē", simplified: "节约", traditional: "節約", english: "save/economize" },
            { pinyin: "huā", simplified: "花", traditional: "花", english: "spend" },
            { pinyin: "zhuàn", simplified: "赚", traditional: "賺", english: "earn" }
        ],
        sentences: [
            { 
                simplified: "我想买一件衣服。", 
                pinyin: "Wǒ xiǎng mǎi yī jiàn yīfu.", 
                english: "I want to buy a piece of clothing." 
            },
            { 
                simplified: "这个多少钱？", 
                pinyin: "Zhège duōshǎo qián?", 
                english: "How much does this cost?" 
            },
            { 
                simplified: "一共三十五块八毛。", 
                pinyin: "Yīgòng sānshíwǔ kuài bā máo.", 
                english: "Thirty-five yuan and eighty cents in total." 
            },
            { 
                simplified: "太贵了，能便宜一点吗？", 
                pinyin: "Tài guì le, néng piányi yīdiǎn ma?", 
                english: "Too expensive, can it be a bit cheaper?" 
            },
            { 
                simplified: "我用现金付款。", 
                pinyin: "Wǒ yòng xiànjīn fùkuǎn.", 
                english: "I'll pay with cash." 
            },
            { 
                simplified: "可以刷信用卡吗？", 
                pinyin: "Kěyǐ shuā xìnyòngkǎ ma?", 
                english: "Can I pay by credit card?" 
            },
            { 
                simplified: "请给我找钱。", 
                pinyin: "Qǐng gěi wǒ zhǎoqián.", 
                english: "Please give me change." 
            },
            { 
                simplified: "收银员很友好。", 
                pinyin: "Shōuyíngyuán hěn yǒuhǎo.", 
                english: "The cashier is very friendly." 
            },
            { 
                simplified: "顾客排队等着付款。", 
                pinyin: "Gùkè páiduì děng zhe fùkuǎn.", 
                english: "Customers are queuing to pay." 
            },
            { 
                simplified: "这个商品可以退货吗？", 
                pinyin: "Zhège shāngpǐn kěyǐ tuìhuò ma?", 
                english: "Can this product be returned?" 
            },
            { 
                simplified: "我想换一个大一点的。", 
                pinyin: "Wǒ xiǎng huàn yī gè dà yīdiǎn de.", 
                english: "I want to exchange for a bigger one." 
            },
            { 
                simplified: "请给我小票。", 
                pinyin: "Qǐng gěi wǒ xiǎopiào.", 
                english: "Please give me the receipt." 
            },
            { 
                simplified: "今天商场打折。", 
                pinyin: "Jīntiān shāngchǎng dǎzhé.", 
                english: "The mall has discounts today." 
            },
            { 
                simplified: "这些衣服都在减价。", 
                pinyin: "Zhèxiē yīfu dōu zài jiǎnjià.", 
                english: "These clothes are all on sale." 
            },
            { 
                simplified: "特价商品不能退换。", 
                pinyin: "Tèjià shāngpǐn bù néng tuìhuàn.", 
                english: "Special-priced items cannot be returned or exchanged." 
            },
            { 
                simplified: "今天停车是免费的。", 
                pinyin: "Jīntiān tíngchē shì miǎnfèi de.", 
                english: "Parking is free today." 
            },
            { 
                simplified: "我需要去银行取钱。", 
                pinyin: "Wǒ xūyào qù yínháng qǔqián.", 
                english: "I need to go to the bank to withdraw money." 
            },
            { 
                simplified: "她每个月都存钱。", 
                pinyin: "Tā měi gè yuè dōu cúnqián.", 
                english: "She saves money every month." 
            },
            { 
                simplified: "我想换一些零钱。", 
                pinyin: "Wǒ xiǎng huàn yīxiē língqián.", 
                english: "I want to exchange for some small change." 
            },
            { 
                simplified: "可以试一下这双鞋吗？", 
                pinyin: "Kěyǐ shì yīxià zhè shuāng xié ma?", 
                english: "Can I try on this pair of shoes?" 
            },
            { 
                simplified: "这个价格很合算。", 
                pinyin: "Zhège jiàgé hěn hésuan.", 
                english: "This price is very reasonable." 
            },
            { 
                simplified: "买太多东西是浪费钱。", 
                pinyin: "Mǎi tài duō dōngxi shì làngfèi qián.", 
                english: "Buying too many things is a waste of money." 
            },
            { 
                simplified: "我们应该节约用钱。", 
                pinyin: "Wǒmen yīnggāi jiéyuē yòngqián.", 
                english: "We should economize with money." 
            },
            { 
                simplified: "他每个月花很多钱买书。", 
                pinyin: "Tā měi gè yuè huā hěn duō qián mǎi shū.", 
                english: "He spends a lot of money buying books every month." 
            },
            { 
                simplified: "她在这家店赚了不少钱。", 
                pinyin: "Tā zài zhè jiā diàn zhuàn le bùshǎo qián.", 
                english: "She earned quite a bit of money from this store." 
            },
            { 
                simplified: "超市里的东西比较便宜。", 
                pinyin: "Chāoshì lǐ de dōngxi bǐjiào piányi.", 
                english: "Things in the supermarket are relatively cheap." 
            },
            { 
                simplified: "这个商店的服务很好。", 
                pinyin: "Zhège shāngdiàn de fúwù hěn hǎo.", 
                english: "This store has very good service." 
            },
            { 
                simplified: "购物中心有很多商店。", 
                pinyin: "Gòuwù zhōngxīn yǒu hěn duō shāngdiàn.", 
                english: "The shopping center has many stores." 
            },
            { 
                simplified: "我忘记带钱包了。", 
                pinyin: "Wǒ wàngjì dài qiánbāo le.", 
                english: "I forgot to bring my wallet." 
            },
            { 
                simplified: "买东西前要比较价格。", 
                pinyin: "Mǎi dōngxi qián yào bǐjiào jiàgé.", 
                english: "You should compare prices before buying things." 
            }
        ]
    },
    
    13: {
    title: "Hobbies and Sports",
    vocabulary: [
        { pinyin: "àihào", simplified: "爱好", traditional: "愛好", english: "hobby/interest" },
        { pinyin: "yùndòng", simplified: "运动", traditional: "運動", english: "sports/exercise" },
        { pinyin: "zúqiú", simplified: "足球", traditional: "足球", english: "soccer/football" },
        { pinyin: "lánqiú", simplified: "篮球", traditional: "籃球", english: "basketball" },
        { pinyin: "pīngpāngqiú", simplified: "乒乓球", traditional: "乒乓球", english: "ping pong/table tennis" },
        { pinyin: "wǎngqiú", simplified: "网球", traditional: "網球", english: "tennis" },
        { pinyin: "yóuyǒng", simplified: "游泳", traditional: "游泳", english: "swimming" },
        { pinyin: "pǎobù", simplified: "跑步", traditional: "跑步", english: "running/jogging" },
        { pinyin: "qíchē", simplified: "骑车", traditional: "騎車", english: "cycling/riding bike" },
        { pinyin: "tàijíquán", simplified: "太极拳", traditional: "太極拳", english: "tai chi" },
        { pinyin: "dēngshān", simplified: "登山", traditional: "登山", english: "mountain climbing" },
        { pinyin: "huàhuà", simplified: "画画", traditional: "畫畫", english: "painting/drawing" },
        { pinyin: "chànggē", simplified: "唱歌", traditional: "唱歌", english: "singing" },
        { pinyin: "tiàowǔ", simplified: "跳舞", traditional: "跳舞", english: "dancing" },
        { pinyin: "dànqín", simplified: "弹琴", traditional: "彈琴", english: "playing piano" },
        { pinyin: "kànshu", simplified: "看书", traditional: "看書", english: "reading books" },
        { pinyin: "xiězì", simplified: "写字", traditional: "寫字", english: "writing/calligraphy" },
        { pinyin: "zhàoxiàng", simplified: "照相", traditional: "照相", english: "taking photos" },
        { pinyin: "lǚxíng", simplified: "旅行", traditional: "旅行", english: "traveling" },
        { pinyin: "diàoyú", simplified: "钓鱼", traditional: "釣魚", english: "fishing" },
        { pinyin: "xiàqí", simplified: "下棋", traditional: "下棋", english: "playing chess" },
        { pinyin: "dǎpái", simplified: "打牌", traditional: "打牌", english: "playing cards" },
        { pinyin: "shōují", simplified: "收集", traditional: "收集", english: "collecting" },
        { pinyin: "yuánzǐ", simplified: "园子", traditional: "園子", english: "garden" },
        { pinyin: "zhǒnghuā", simplified: "种花", traditional: "種花", english: "growing flowers" },
        { pinyin: "bǐsài", simplified: "比赛", traditional: "比賽", english: "competition/match" },
        { pinyin: "tuánduì", simplified: "团队", traditional: "團隊", english: "team" },
        { pinyin: "liànxí", simplified: "练习", traditional: "練習", english: "practice" },
        { pinyin: "jìnéng", simplified: "技能", traditional: "技能", english: "skill" },
        { pinyin: "jiànkāng", simplified: "健康", traditional: "健康", english: "healthy" }
    ],
    sentences: [
        { simplified: "你有什么爱好？", pinyin: "Nǐ yǒu shénme àihào?", english: "What hobbies do you have?" },
        { simplified: "我喜欢运动，特别是足球。", pinyin: "Wǒ xǐhuān yùndòng, tèbié shì zúqiú.", english: "I like sports, especially soccer." },
        { simplified: "他每天早上去跑步。", pinyin: "Tā měitiān zǎoshang qù pǎobù.", english: "He goes running every morning." },
        { simplified: "我们学校有篮球队。", pinyin: "Wǒmen xuéxiào yǒu lánqiú duì.", english: "Our school has a basketball team." },
        { simplified: "中国人很喜欢打乒乓球。", pinyin: "Zhōngguórén hěn xǐhuān dǎ pīngpāngqiú.", english: "Chinese people really like playing ping pong." },
        { simplified: "夏天我经常去游泳。", pinyin: "Xiàtiān wǒ jīngcháng qù yóuyǒng.", english: "I often go swimming in summer." },
        { simplified: "妹妹在学跳舞。", pinyin: "Mèimei zài xué tiàowǔ.", english: "My younger sister is learning to dance." },
        { simplified: "爷爷每天早上练太极拳。", pinyin: "Yéye měitiān zǎoshang liàn tàijíquán.", english: "Grandpa practices tai chi every morning." },
        { simplified: "周末我们去登山。", pinyin: "Zhōumò wǒmen qù dēngshān.", english: "We go mountain climbing on weekends." },
        { simplified: "姐姐会弹琴，也会唱歌。", pinyin: "Jiějie huì dànqín, yě huì chànggē.", english: "My older sister can play piano and also sing." },
        { simplified: "我的爱好是画画和看书。", pinyin: "Wǒ de àihào shì huàhuà hé kànshu.", english: "My hobbies are painting and reading books." },
        { simplified: "爸爸喜欢钓鱼和下棋。", pinyin: "Bàba xǐhuān diàoyú hé xiàqí.", english: "Dad likes fishing and playing chess." },
        { simplified: "她喜欢照相和旅行。", pinyin: "Tā xǐhuān zhàoxiàng hé lǚxíng.", english: "She likes taking photos and traveling." },
        { simplified: "我在练习写字。", pinyin: "Wǒ zài liànxí xiězì.", english: "I am practicing calligraphy." },
        { simplified: "奶奶喜欢在园子里种花。", pinyin: "Nǎinai xǐhuān zài yuánzi lǐ zhǒnghuā.", english: "Grandma likes growing flowers in the garden." },
        { simplified: "他们在打网球比赛。", pinyin: "Tāmen zài dǎ wǎngqiú bǐsài.", english: "They are playing in a tennis match." },
        { simplified: "我收集邮票已经十年了。", pinyin: "Wǒ shōují yóupiào yǐjīng shí nián le.", english: "I have been collecting stamps for ten years." },
        { simplified: "运动对身体健康很重要。", pinyin: "Yùndòng duì shēntǐ jiànkāng hěn zhòngyào.", english: "Exercise is very important for physical health." },
        { simplified: "我们团队需要更多练习。", pinyin: "Wǒmen tuánduì xūyào gèng duō liànxí.", english: "Our team needs more practice." },
        { simplified: "学新技能需要时间。", pinyin: "Xué xīn jìnéng xūyào shíjiān.", english: "Learning new skills takes time." },
        { simplified: "孩子们在公园里骑车。", pinyin: "Háizimen zài gōngyuán lǐ qíchē.", english: "The children are cycling in the park." },
        { simplified: "晚上我们一起打牌。", pinyin: "Wǎnshang wǒmen yīqǐ dǎpái.", english: "We play cards together in the evening." },
        { simplified: "她每周去健身房运动。", pinyin: "Tā měi zhōu qù jiànshēnfáng yùndòng.", english: "She goes to the gym to exercise every week." },
        { simplified: "这个比赛很有意思。", pinyin: "Zhège bǐsài hěn yǒu yìsi.", english: "This competition is very interesting." },
        { simplified: "我想学打太极拳。", pinyin: "Wǒ xiǎng xué dǎ tàijíquán.", english: "I want to learn tai chi." },
        { simplified: "他的画画技能很好。", pinyin: "Tā de huàhuà jìnéng hěn hǎo.", english: "His painting skills are very good." },
        { simplified: "我们队赢了足球比赛。", pinyin: "Wǒmen duì yíng le zúqiú bǐsài.", english: "Our team won the soccer match." },
        { simplified: "爱好让生活更有趣。", pinyin: "Àihào ràng shēnghuó gèng yǒuqù.", english: "Hobbies make life more interesting." },
        { simplified: "每个人都应该有自己的爱好。", pinyin: "Měi gè rén dōu yīnggāi yǒu zìjǐ de àihào.", english: "Everyone should have their own hobbies." },
        { simplified: "运动和爱好帮助我们保持健康快乐。", pinyin: "Yùndòng hé àihào bāngzhù wǒmen bǎochí jiànkāng kuàilè.", english: "Sports and hobbies help us stay healthy and happy." }
    ]
},
    
    14: {
    title: "Emotions and Feelings",
    vocabulary: [
        { pinyin: "gāoxìng", simplified: "高兴", traditional: "高興", english: "happy/glad" },
        { pinyin: "kāixīn", simplified: "开心", traditional: "開心", english: "happy/joyful" },
        { pinyin: "kuàilè", simplified: "快乐", traditional: "快樂", english: "happy/cheerful" },
        { pinyin: "nánguò", simplified: "难过", traditional: "難過", english: "sad/upset" },
        { pinyin: "shāngxīn", simplified: "伤心", traditional: "傷心", english: "heartbroken/sad" },
        { pinyin: "shēngqì", simplified: "生气", traditional: "生氣", english: "angry" },
        { pinyin: "fāhuǒ", simplified: "发火", traditional: "發火", english: "get angry/lose temper" },
        { pinyin: "dānxīn", simplified: "担心", traditional: "擔心", english: "worry/concerned" },
        { pinyin: "hàipà", simplified: "害怕", traditional: "害怕", english: "afraid/scared" },
        { pinyin: "jǐnzhāng", simplified: "紧张", traditional: "緊張", english: "nervous/tense" },
        { pinyin: "fàngxīn", simplified: "放心", traditional: "放心", english: "relieved/at ease" },
        { pinyin: "ānxīn", simplified: "安心", traditional: "安心", english: "feel at peace" },
        { pinyin: "xīngfèn", simplified: "兴奋", traditional: "興奮", english: "excited" },
        { pinyin: "jīdòng", simplified: "激动", traditional: "激動", english: "excited/moved" },
        { pinyin: "mǎnyì", simplified: "满意", traditional: "滿意", english: "satisfied" },
        { pinyin: "shīwàng", simplified: "失望", traditional: "失望", english: "disappointed" },
        { pinyin: "hòuhuǐ", simplified: "后悔", traditional: "後悔", english: "regret" },
        { pinyin: "gǎndòng", simplified: "感动", traditional: "感動", english: "moved/touched" },
        { pinyin: "jiāo'ào", simplified: "骄傲", traditional: "驕傲", english: "proud" },
        { pinyin: "zìháo", simplified: "自豪", traditional: "自豪", english: "proud/take pride in" },
        { pinyin: "xiūchǐ", simplified: "羞耻", traditional: "羞恥", english: "ashamed" },
        { pinyin: "nánwéiqíng", simplified: "难为情", traditional: "難為情", english: "embarrassed" },
        { pinyin: "jílù", simplified: "嫉妒", traditional: "嫉妒", english: "jealous" },
        { pinyin: "xiànmù", simplified: "羡慕", traditional: "羨慕", english: "envy/admire" },
        { pinyin: "gūdú", simplified: "孤独", traditional: "孤獨", english: "lonely" },
        { pinyin: "jìmò", simplified: "寂寞", traditional: "寂寞", english: "lonely/lonesome" },
        { pinyin: "wúliáo", simplified: "无聊", traditional: "無聊", english: "bored" },
        { pinyin: "yōulǜ", simplified: "忧虑", traditional: "憂慮", english: "worried/anxious" },
        { pinyin: "yālì", simplified: "压力", traditional: "壓力", english: "pressure/stress" }
    ],
    sentences: [
        { simplified: "今天我很高兴。", pinyin: "Jīntiān wǒ hěn gāoxìng.", english: "I'm very happy today." },
        { simplified: "听到好消息我很开心。", pinyin: "Tīngdào hǎo xiāoxī wǒ hěn kāixīn.", english: "I'm very happy to hear the good news." },
        { simplified: "孩子们在公园里玩得很快乐。", pinyin: "Háizimen zài gōngyuán lǐ wán de hěn kuàilè.", english: "The children are playing happily in the park." },
        { simplified: "她考试没通过，很难过。", pinyin: "Tā kǎoshì méi tōngguò, hěn nánguò.", english: "She's very sad because she didn't pass the exam." },
        { simplified: "小狗死了，他很伤心。", pinyin: "Xiǎo gǒu sǐ le, tā hěn shāngxīn.", english: "He's very heartbroken because his puppy died." },
        { simplified: "妈妈因为我撒谎而生气。", pinyin: "Māma yīnwèi wǒ sāhuǎng ér shēngqì.", english: "Mom is angry because I lied." },
        { simplified: "老板对员工发火了。", pinyin: "Lǎobǎn duì yuángōng fāhuǒ le.", english: "The boss lost his temper at the employees." },
        { simplified: "父母担心孩子的安全。", pinyin: "Fùmǔ dānxīn háizi de ānquán.", english: "Parents worry about their children's safety." },
        { simplified: "我害怕一个人走夜路。", pinyin: "Wǒ hàipà yí gè rén zǒu yèlù.", english: "I'm afraid to walk alone at night." },
        { simplified: "面试的时候我很紧张。", pinyin: "Miànshì de shíhòu wǒ hěn jǐnzhāng.", english: "I was very nervous during the interview." },
        { simplified: "知道你平安到家我就放心了。", pinyin: "Zhīdào nǐ píng'ān dào jiā wǒ jiù fàngxīn le.", english: "I'm relieved to know you got home safely." },
        { simplified: "找到工作后他很安心。", pinyin: "Zhǎodào gōngzuò hòu tā hěn ānxīn.", english: "He feels at peace after finding a job." },
        { simplified: "听说要去旅游，孩子们很兴奋。", pinyin: "Tīngshuō yào qù lǚyóu, háizimen hěn xīngfèn.", english: "The children are very excited to hear about the trip." },
        { simplified: "看到老朋友她很激动。", pinyin: "Kàndào lǎo péngyǒu tā hěn jīdòng.", english: "She was very excited to see her old friend." },
        { simplified: "我对这个结果很满意。", pinyin: "Wǒ duì zhège jiéguǒ hěn mǎnyì.", english: "I'm very satisfied with this result." },
        { simplified: "电影不好看，我很失望。", pinyin: "Diànyǐng bù hǎokàn, wǒ hěn shīwàng.", english: "The movie wasn't good, I'm very disappointed." },
        { simplified: "他后悔没有好好学习。", pinyin: "Tā hòuhuǐ méiyǒu hǎohǎo xuéxí.", english: "He regrets not studying hard." },
        { simplified: "老师的话让我很感动。", pinyin: "Lǎoshī de huà ràng wǒ hěn gǎndòng.", english: "The teacher's words really moved me." },
        { simplified: "父母为儿子的成功感到骄傲。", pinyin: "Fùmǔ wèi érzi de chénggōng gǎndào jiāo'ào.", english: "The parents feel proud of their son's success." },
        { simplified: "我为自己的国家感到自豪。", pinyin: "Wǒ wèi zìjǐ de guójiā gǎndào zìháo.", english: "I take pride in my country." },
        { simplified: "做错事情后她觉得很羞耻。", pinyin: "Zuòcuò shìqíng hòu tā juéde hěn xiūchǐ.", english: "She felt very ashamed after doing something wrong." },
        { simplified: "在众人面前跌倒让他很难为情。", pinyin: "Zài zhòngrén miànqián diēdǎo ràng tā hěn nánwéiqíng.", english: "Falling in front of everyone made him very embarrassed." },
        { simplified: "她嫉妒同事的升职。", pinyin: "Tā jílù tóngshì de shēngzhí.", english: "She's jealous of her colleague's promotion." },
        { simplified: "我羡慕他的生活方式。", pinyin: "Wǒ xiànmù tā de shēnghuó fāngshì.", english: "I admire his lifestyle." },
        { simplified: "老人一个人住觉得很孤独。", pinyin: "Lǎorén yí gè rén zhù juéde hěn gūdú.", english: "The elderly person feels very lonely living alone." },
        { simplified: "朋友都走了，我觉得很寂寞。", pinyin: "Péngyǒu dōu zǒu le, wǒ juéde hěn jìmò.", english: "All my friends have left, I feel very lonesome." },
        { simplified: "下雨天在家里很无聊。", pinyin: "Xiàyǔ tiān zài jiālǐ hěn wúliáo.", english: "It's very boring to stay at home on rainy days." },
        { simplified: "对未来他充满忧虑。", pinyin: "Duì wèilái tā chōngmǎn yōulǜ.", english: "He's full of worry about the future." },
        { simplified: "工作压力让他睡不好觉。", pinyin: "Gōngzuò yālì ràng tā shuì bù hǎo jiào.", english: "Work pressure keeps him from sleeping well." },
        { simplified: "人的情感很复杂。", pinyin: "Rén de qínggǎn hěn fùzá.", english: "Human emotions are very complex." }
    ]
},
    
    15: {
    title: "Directions and Places",
    vocabulary: [
        { pinyin: "fāngxiàng", simplified: "方向", traditional: "方向", english: "direction" },
        { pinyin: "dōng", simplified: "东", traditional: "東", english: "east" },
        { pinyin: "nán", simplified: "南", traditional: "南", english: "south" },
        { pinyin: "xī", simplified: "西", traditional: "西", english: "west" },
        { pinyin: "běi", simplified: "北", traditional: "北", english: "north" },
        { pinyin: "zuǒ", simplified: "左", traditional: "左", english: "left" },
        { pinyin: "yòu", simplified: "右", traditional: "右", english: "right" },
        { pinyin: "qián", simplified: "前", traditional: "前", english: "front/forward" },
        { pinyin: "hòu", simplified: "后", traditional: "後", english: "back/behind" },
        { pinyin: "shàng", simplified: "上", traditional: "上", english: "up/above" },
        { pinyin: "xià", simplified: "下", traditional: "下", english: "down/below" },
        { pinyin: "zhōngjiān", simplified: "中间", traditional: "中間", english: "middle/between" },
        { pinyin: "pángbiān", simplified: "旁边", traditional: "旁邊", english: "beside/next to" },
        { pinyin: "duìmiàn", simplified: "对面", traditional: "對面", english: "opposite/across from" },
        { pinyin: "fùjìn", simplified: "附近", traditional: "附近", english: "nearby/vicinity" },
        { pinyin: "yuǎn", simplified: "远", traditional: "遠", english: "far" },
        { pinyin: "jìn", simplified: "近", traditional: "近", english: "near/close" },
        { pinyin: "zhí", simplified: "直", traditional: "直", english: "straight" },
        { pinyin: "guǎi", simplified: "拐", traditional: "拐", english: "turn" },
        { pinyin: "lù", simplified: "路", traditional: "路", english: "road/way" },
        { pinyin: "jiē", simplified: "街", traditional: "街", english: "street" },
        { pinyin: "lùkǒu", simplified: "路口", traditional: "路口", english: "intersection/crossroads" },
        { pinyin: "qiáo", simplified: "桥", traditional: "橋", english: "bridge" },
        { pinyin: "dìtú", simplified: "地图", traditional: "地圖", english: "map" },
        { pinyin: "dìzhǐ", simplified: "地址", traditional: "地址", english: "address" },
        { pinyin: "dìfāng", simplified: "地方", traditional: "地方", english: "place/location" },
        { pinyin: "chéngshì", simplified: "城市", traditional: "城市", english: "city" },
        { pinyin: "xiāngxià", simplified: "乡下", traditional: "鄉下", english: "countryside/rural area" },
        { pinyin: "shāngdiàn", simplified: "商店", traditional: "商店", english: "shop/store" },
        { pinyin: "chāoshì", simplified: "超市", traditional: "超市", english: "supermarket" },
        { pinyin: "yínháng", simplified: "银行", traditional: "銀行", english: "bank" },
        { pinyin: "yóujú", simplified: "邮局", traditional: "郵局", english: "post office" },
        { pinyin: "yīyuàn", simplified: "医院", traditional: "醫院", english: "hospital" },
        { pinyin: "gōngyuán", simplified: "公园", traditional: "公園", english: "park" },
        { pinyin: "túshūguǎn", simplified: "图书馆", traditional: "圖書館", english: "library" },
        { pinyin: "bówùguǎn", simplified: "博物馆", traditional: "博物館", english: "museum" },
        { pinyin: "jiǔdiàn", simplified: "酒店", traditional: "酒店", english: "hotel" },
        { pinyin: "fàndiàn", simplified: "饭店", traditional: "飯店", english: "restaurant" },
        { pinyin: "kāfēi tīng", simplified: "咖啡厅", traditional: "咖啡廳", english: "cafe" },
        { pinyin: "diànyǐngyuàn", simplified: "电影院", traditional: "電影院", english: "cinema/movie theater" },
        { pinyin: "huǒchēzhàn", simplified: "火车站", traditional: "火車站", english: "railway station" },
        { pinyin: "jīchǎng", simplified: "机场", traditional: "機場", english: "airport" },
        { pinyin: "gōngjiāo chē zhàn", simplified: "公交车站", traditional: "公交車站", english: "bus stop" },
        { pinyin: "dìtiě zhàn", simplified: "地铁站", traditional: "地鐵站", english: "subway station" }
    ],
    sentences: [
        { simplified: "请问银行在哪里？", pinyin: "Qǐngwèn yínháng zài nǎlǐ?", english: "Excuse me, where is the bank?" },
        { simplified: "银行在超市的对面。", pinyin: "Yínháng zài chāoshì de duìmiàn.", english: "The bank is across from the supermarket." },
        { simplified: "你知道这个地址吗？", pinyin: "Nǐ zhīdào zhège dìzhǐ ma?", english: "Do you know this address?" },
        { simplified: "我需要一张地图。", pinyin: "Wǒ xūyào yī zhāng dìtú.", english: "I need a map." },
        { simplified: "从这里往北走。", pinyin: "Cóng zhèlǐ wǎng běi zǒu.", english: "Go north from here." },
        { simplified: "向左转就到了。", pinyin: "Xiàng zuǒ zhuǎn jiù dào le.", english: "Turn left and you'll arrive." },
        { simplified: "一直往前走。", pinyin: "Yīzhí wǎng qián zǒu.", english: "Keep going straight ahead." },
        { simplified: "在第二个路口右转。", pinyin: "Zài dì èr gè lùkǒu yòu zhuǎn.", english: "Turn right at the second intersection." },
        { simplified: "医院在学校附近。", pinyin: "Yīyuàn zài xuéxiào fùjìn.", english: "The hospital is near the school." },
        { simplified: "图书馆离这里很远。", pinyin: "Túshūguǎn lí zhèlǐ hěn yuǎn.", english: "The library is very far from here." },
        { simplified: "公园就在我家旁边。", pinyin: "Gōngyuán jiù zài wǒ jiā pángbiān.", english: "The park is right next to my house." },
        { simplified: "邮局在银行和书店中间。", pinyin: "Yóujú zài yínháng hé shūdiàn zhōngjiān.", english: "The post office is between the bank and bookstore." },
        { simplified: "火车站在城市的南边。", pinyin: "Huǒchēzhàn zài chéngshì de nánbiān.", english: "The railway station is on the south side of the city." },
        { simplified: "机场离市中心很远。", pinyin: "Jīchǎng lí shì zhōngxīn hěn yuǎn.", english: "The airport is very far from the city center." },
        { simplified: "公交车站就在前面。", pinyin: "Gōngjiāo chē zhàn jiù zài qiánmiàn.", english: "The bus stop is right ahead." },
        { simplified: "地铁站在地下。", pinyin: "Dìtiě zhàn zài dìxià.", english: "The subway station is underground." },
        { simplified: "这条街上有很多商店。", pinyin: "Zhè tiáo jiē shàng yǒu hěn duō shāngdiàn.", english: "There are many shops on this street." },
        { simplified: "过了桥就是博物馆。", pinyin: "Guò le qiáo jiù shì bówùguǎn.", english: "The museum is just past the bridge." },
        { simplified: "咖啡厅在二楼。", pinyin: "Kāfēi tīng zài èr lóu.", english: "The cafe is on the second floor." },
        { simplified: "酒店在机场附近。", pinyin: "Jiǔdiàn zài jīchǎng fùjìn.", english: "The hotel is near the airport." },
        { simplified: "这个饭店的菜很好吃。", pinyin: "Zhège fàndiàn de cài hěn hào chī.", english: "The food at this restaurant is very delicious." },
        { simplified: "电影院在购物中心里面。", pinyin: "Diànyǐngyuàn zài gòuwù zhōngxīn lǐmiàn.", english: "The cinema is inside the shopping center." },
        { simplified: "我住在城市的西边。", pinyin: "Wǒ zhù zài chéngshì de xībiān.", english: "I live on the west side of the city." },
        { simplified: "乡下的空气很新鲜。", pinyin: "Xiāngxià de kōngqì hěn xīnxiān.", english: "The air in the countryside is very fresh." },
        { simplified: "你能告诉我方向吗？", pinyin: "Nǐ néng gàosu wǒ fāngxiàng ma?", english: "Can you tell me the direction?" },
        { simplified: "这个地方我不认识。", pinyin: "Zhège dìfāng wǒ bù rènshi.", english: "I don't recognize this place." },
        { simplified: "从这里到那里要多长时间？", pinyin: "Cóng zhèlǐ dào nàlǐ yào duō cháng shíjiān?", english: "How long does it take to get from here to there?" },
        { simplified: "你走错方向了。", pinyin: "Nǐ zǒu cuò fāngxiàng le.", english: "You went in the wrong direction." },
        { simplified: "这条路通向哪里？", pinyin: "Zhè tiáo lù tōngxiàng nǎlǐ?", english: "Where does this road lead to?" },
        { simplified: "我在这个路口等你。", pinyin: "Wǒ zài zhège lùkǒu děng nǐ.", english: "I'll wait for you at this intersection." }
    ]
},
    
    16: {
    title: "Technology and Media",
    vocabulary: [
        { pinyin: "diànnǎo", simplified: "电脑", traditional: "電腦", english: "computer" },
        { pinyin: "shǒujī", simplified: "手机", traditional: "手機", english: "mobile phone" },
        { pinyin: "wǎngluò", simplified: "网络", traditional: "網絡", english: "network/internet" },
        { pinyin: "wǎngzhàn", simplified: "网站", traditional: "網站", english: "website" },
        { pinyin: "diànshì", simplified: "电视", traditional: "電視", english: "television" },
        { pinyin: "shōuyīnjī", simplified: "收音机", traditional: "收音機", english: "radio" },
        { pinyin: "zhàoxiàngjī", simplified: "照相机", traditional: "照相機", english: "camera" },
        { pinyin: "lùyīnjī", simplified: "录音机", traditional: "錄音機", english: "tape recorder" },
        { pinyin: "yóuxì", simplified: "游戏", traditional: "游戲", english: "game" },
        { pinyin: "ruǎnjiàn", simplified: "软件", traditional: "軟件", english: "software" },
        { pinyin: "yìngjiàn", simplified: "硬件", traditional: "硬件", english: "hardware" },
        { pinyin: "wénjiàn", simplified: "文件", traditional: "文件", english: "file/document" },
        { pinyin: "xiàzài", simplified: "下载", traditional: "下載", english: "download" },
        { pinyin: "shàngchuán", simplified: "上传", traditional: "上傳", english: "upload" },
        { pinyin: "fāsòng", simplified: "发送", traditional: "發送", english: "send" },
        { pinyin: "jiēshōu", simplified: "接收", traditional: "接收", english: "receive" },
        { pinyin: "diànzǐ", simplified: "电子", traditional: "電子", english: "electronic" },
        { pinyin: "shùzì", simplified: "数字", traditional: "數字", english: "digital" },
        { pinyin: "xìnxī", simplified: "信息", traditional: "信息", english: "information" },
        { pinyin: "xiāoxi", simplified: "消息", traditional: "消息", english: "message/news" },
        { pinyin: "bàozhǐ", simplified: "报纸", traditional: "報紙", english: "newspaper" },
        { pinyin: "zázhì", simplified: "杂志", traditional: "雜誌", english: "magazine" },
        { pinyin: "xīnwén", simplified: "新闻", traditional: "新聞", english: "news" },
        { pinyin: "guǎnggào", simplified: "广告", traditional: "廣告", english: "advertisement" },
        { pinyin: "pínmù", simplified: "屏幕", traditional: "屏幕", english: "screen" },
        { pinyin: "jiànpán", simplified: "键盘", traditional: "鍵盤", english: "keyboard" },
        { pinyin: "shǔbiāo", simplified: "鼠标", traditional: "鼠標", english: "mouse" },
        { pinyin: "yīnxiǎng", simplified: "音响", traditional: "音響", english: "sound system/speaker" },
        { pinyin: "ěrjī", simplified: "耳机", traditional: "耳機", english: "headphones/earphones" },
        { pinyin: "chōngdiàn", simplified: "充电", traditional: "充電", english: "charge (battery)" }
    ],
    sentences: [
        { simplified: "我每天用电脑工作。", pinyin: "Wǒ měitiān yòng diànnǎo gōngzuò.", english: "I use the computer to work every day." },
        { simplified: "手机没电了，需要充电。", pinyin: "Shǒujī méi diàn le, xūyào chōngdiàn.", english: "The phone is out of battery and needs charging." },
        { simplified: "网络连接不太好。", pinyin: "Wǎngluò liánjiē bù tài hǎo.", english: "The internet connection is not very good." },
        { simplified: "这个网站很有用。", pinyin: "Zhège wǎngzhàn hěn yǒuyòng.", english: "This website is very useful." },
        { simplified: "晚上我喜欢看电视。", pinyin: "Wǎnshang wǒ xǐhuān kàn diànshì.", english: "I like watching TV in the evening." },
        { simplified: "爷爷每天听收音机。", pinyin: "Yéye měitiān tīng shōuyīnjī.", english: "Grandpa listens to the radio every day." },
        { simplified: "我想买一个新的照相机。", pinyin: "Wǒ xiǎng mǎi yī gè xīn de zhàoxiàngjī.", english: "I want to buy a new camera." },
        { simplified: "老师用录音机播放音乐。", pinyin: "Lǎoshī yòng lùyīnjī bòfàng yīnyuè.", english: "The teacher uses a tape recorder to play music." },
        { simplified: "弟弟喜欢玩电脑游戏。", pinyin: "Dìdi xǐhuān wán diànnǎo yóuxì.", english: "My younger brother likes playing computer games." },
        { simplified: "这个软件很容易使用。", pinyin: "Zhège ruǎnjiàn hěn róngyì shǐyòng.", english: "This software is very easy to use." },
        { simplified: "电脑硬件出了问题。", pinyin: "Diànnǎo yìngjiàn chū le wèntí.", english: "There's a problem with the computer hardware." },
        { simplified: "请把文件发送给我。", pinyin: "Qǐng bǎ wénjiàn fāsòng gěi wǒ.", english: "Please send me the file." },
        { simplified: "我正在下载一个软件。", pinyin: "Wǒ zhèngzài xiàzài yī gè ruǎnjiàn.", english: "I'm downloading a software." },
        { simplified: "你需要上传这张照片。", pinyin: "Nǐ xūyào shàngchuán zhè zhāng zhàopiàn.", english: "You need to upload this photo." },
        { simplified: "我还没有接收到你的消息。", pinyin: "Wǒ hái méiyǒu jiēshōu dào nǐ de xiāoxi.", english: "I haven't received your message yet." },
        { simplified: "电子邮件很方便。", pinyin: "Diànzǐ yóujiàn hěn fāngbiàn.", english: "Email is very convenient." },
        { simplified: "现在是数字时代。", pinyin: "Xiànzài shì shùzì shídài.", english: "Now is the digital age." },
        { simplified: "网上有很多有用的信息。", pinyin: "Wǎngshàng yǒu hěn duō yǒuyòng de xìnxī.", english: "There's a lot of useful information online." },
        { simplified: "我刚看到一条重要消息。", pinyin: "Wǒ gāng kàn dào yī tiáo zhòngyào xiāoxi.", english: "I just saw an important message." },
        { simplified: "爸爸每天早上读报纸。", pinyin: "Bàba měitiān zǎoshang dú bàozhǐ.", english: "Dad reads the newspaper every morning." },
        { simplified: "妈妈喜欢看时尚杂志。", pinyin: "Māma xǐhuān kàn shíshàng zázhì.", english: "Mom likes reading fashion magazines." },
        { simplified: "今天的新闻很有趣。", pinyin: "Jīntiān de xīnwén hěn yǒuqù.", english: "Today's news is very interesting." },
        { simplified: "电视上有太多广告。", pinyin: "Diànshì shàng yǒu tài duō guǎnggào.", english: "There are too many advertisements on TV." },
        { simplified: "这个屏幕太小了。", pinyin: "Zhège pínmù tài xiǎo le.", english: "This screen is too small." },
        { simplified: "键盘上有一个键坏了。", pinyin: "Jiànpán shàng yǒu yī gè jiàn huài le.", english: "One key on the keyboard is broken." },
        { simplified: "鼠标不能正常工作。", pinyin: "Shǔbiāo bù néng zhèngcháng gōngzuò.", english: "The mouse isn't working properly." },
        { simplified: "音响的声音太大了。", pinyin: "Yīnxiǎng de shēngyīn tài dà le.", english: "The speaker's sound is too loud." },
        { simplified: "我买了一副新耳机。", pinyin: "Wǒ mǎi le yī fù xīn ěrjī.", english: "I bought a new pair of headphones." },
        { simplified: "科技改变了我们的生活。", pinyin: "Kējì gǎibiàn le wǒmen de shēnghuó.", english: "Technology has changed our lives." },
        { simplified: "年轻人都喜欢用新技术。", pinyin: "Niánqīng rén dōu xǐhuān yòng xīn jìshù.", english: "Young people all like using new technology." }
    ]
},
    
    17: {
        title: "Furniture and Household",
        vocabulary: [
            { pinyin: "jiājù", simplified: "家具", traditional: "家具", english: "furniture" },
            { pinyin: "zhuōzi", simplified: "桌子", traditional: "桌子", english: "table/desk" },
            { pinyin: "yǐzi", simplified: "椅子", traditional: "椅子", english: "chair" },
            { pinyin: "chuáng", simplified: "床", traditional: "床", english: "bed" },
            { pinyin: "shāfā", simplified: "沙发", traditional: "沙發", english: "sofa" },
            { pinyin: "guìzi", simplified: "柜子", traditional: "櫃子", english: "cabinet/cupboard" },
            { pinyin: "shūguì", simplified: "书柜", traditional: "書櫃", english: "bookshelf" },
            { pinyin: "yīguì", simplified: "衣柜", traditional: "衣櫃", english: "wardrobe/closet" },
            { pinyin: "diànshì", simplified: "电视", traditional: "電視", english: "television" },
            { pinyin: "bīngxiāng", simplified: "冰箱", traditional: "冰箱", english: "refrigerator" },
            { pinyin: "xǐyījī", simplified: "洗衣机", traditional: "洗衣機", english: "washing machine" },
            { pinyin: "kōngtiáo", simplified: "空调", traditional: "空調", english: "air conditioner" },
            { pinyin: "dēng", simplified: "灯", traditional: "燈", english: "light/lamp" },
            { pinyin: "chuānglián", simplified: "窗帘", traditional: "窗簾", english: "curtains" },
            { pinyin: "dìtǎn", simplified: "地毯", traditional: "地毯", english: "carpet/rug" },
            { pinyin: "zhěntou", simplified: "枕头", traditional: "枕頭", english: "pillow" },
            { pinyin: "bèizi", simplified: "被子", traditional: "被子", english: "quilt/blanket" },
            { pinyin: "chuángdān", simplified: "床单", traditional: "床單", english: "bed sheet" },
            { pinyin: "jìngzi", simplified: "镜子", traditional: "鏡子", english: "mirror" },
            { pinyin: "zhōng", simplified: "钟", traditional: "鐘", english: "clock" },
            { pinyin: "huā", simplified: "花", traditional: "花", english: "flower" },
            { pinyin: "huāpíng", simplified: "花瓶", traditional: "花瓶", english: "vase" },
            { pinyin: "diànfēngshàn", simplified: "电风扇", traditional: "電風扇", english: "electric fan" },
            { pinyin: "chájī", simplified: "茶几", traditional: "茶几", english: "coffee table" },
            { pinyin: "shūzhuō", simplified: "书桌", traditional: "書桌", english: "desk" },
            { pinyin: "chuáng tóu guì", simplified: "床头柜", traditional: "床頭櫃", english: "nightstand" },
            { pinyin: "yánshuāng", simplified: "演讲", traditional: "演講", english: "speech/presentation" },
            { pinyin: "jiādian", simplified: "家电", traditional: "家電", english: "home appliances" },
            { pinyin: "cānjù", simplified: "餐具", traditional: "餐具", english: "tableware/dinnerware" },
            { pinyin: "wǎn", simplified: "碗", traditional: "碗", english: "bowl" },
            { pinyin: "pánzi", simplified: "盘子", traditional: "盤子", english: "plate" },
            { pinyin: "kuàizi", simplified: "筷子", traditional: "筷子", english: "chopsticks" },
            { pinyin: "cházi", simplified: "叉子", traditional: "叉子", english: "fork" },
            { pinyin: "dāozi", simplified: "刀子", traditional: "刀子", english: "knife" },
            { pinyin: "sháozi", simplified: "勺子", traditional: "勺子", english: "spoon" },
            { pinyin: "bēizi", simplified: "杯子", traditional: "杯子", english: "cup/glass" },
            { pinyin: "máojīn", simplified: "毛巾", traditional: "毛巾", english: "towel" },
            { pinyin: "féizào", simplified: "肥皂", traditional: "肥皂", english: "soap" },
            { pinyin: "yáshuā", simplified: "牙刷", traditional: "牙刷", english: "toothbrush" },
            { pinyin: "yágāo", simplified: "牙膏", traditional: "牙膏", english: "toothpaste" },
            { pinyin: "shūzi", simplified: "梳子", traditional: "梳子", english: "comb" }
        ],
        sentences: [
            { simplified: "客厅里有很多家具。", pinyin: "Kètīng lǐ yǒu hěn duō jiājù.", english: "There's a lot of furniture in the living room." },
            { simplified: "这张桌子是木头做的。", pinyin: "Zhè zhāng zhuōzi shì mùtou zuò de.", english: "This table is made of wood." },
            { simplified: "请坐在这把椅子上。", pinyin: "Qǐng zuò zài zhè bǎ yǐzi shàng.", english: "Please sit on this chair." },
            { simplified: "我的床很舒服。", pinyin: "Wǒ de chuáng hěn shūfu.", english: "My bed is very comfortable." },
            { simplified: "他们在沙发上看电视。", pinyin: "Tāmen zài shāfā shàng kàn diànshì.", english: "They're watching TV on the sofa." },
            { simplified: "书都放在书柜里。", pinyin: "Shū dōu fàng zài shūguì lǐ.", english: "All the books are kept in the bookshelf." },
            { simplified: "妈妈把衣服放进衣柜。", pinyin: "Māma bǎ yīfu fàng jìn yīguì.", english: "Mom puts the clothes in the wardrobe." },
            { simplified: "冰箱里有很多食物。", pinyin: "Bīngxiāng lǐ yǒu hěn duō shíwù.", english: "There's a lot of food in the refrigerator." },
            { simplified: "洗衣机坏了，需要修理。", pinyin: "Xǐyījī huài le, xūyào xiūlǐ.", english: "The washing machine is broken and needs repair." },
            { simplified: "夏天我们开空调。", pinyin: "Xiàtiān wǒmen kāi kōngtiáo.", english: "We turn on the air conditioner in summer." },
            { simplified: "请把灯打开。", pinyin: "Qǐng bǎ dēng dǎkāi.", english: "Please turn on the light." },
            { simplified: "妈妈买了新窗帘。", pinyin: "Māma mǎi le xīn chuānglián.", english: "Mom bought new curtains." },
            { simplified: "地毯很脏，需要清洗。", pinyin: "Dìtǎn hěn zāng, xūyào qīngxǐ.", english: "The carpet is dirty and needs cleaning." },
            { simplified: "我的枕头很软。", pinyin: "Wǒ de zhěntou hěn ruǎn.", english: "My pillow is very soft." },
            { simplified: "冬天需要厚被子。", pinyin: "Dōngtiān xūyào hòu bèizi.", english: "We need thick blankets in winter." },
            { simplified: "床单每周要换一次。", pinyin: "Chuángdān měi zhōu yào huàn yī cì.", english: "Bed sheets need to be changed once a week." },
            { simplified: "她在镜子前梳头发。", pinyin: "Tā zài jìngzi qián shū tóufa.", english: "She combs her hair in front of the mirror." },
            { simplified: "墙上挂着一个大钟。", pinyin: "Qiáng shàng guà zhe yī gè dà zhōng.", english: "A big clock is hanging on the wall." },
            { simplified: "花瓶里插着美丽的花。", pinyin: "Huāpíng lǐ chā zhe měilì de huā.", english: "Beautiful flowers are arranged in the vase." },
            { simplified: "天气热，我打开电风扇。", pinyin: "Tiānqì rè, wǒ dǎkāi diànfēngshàn.", english: "It's hot, so I turn on the electric fan." },
            { simplified: "茶几上放着一些杂志。", pinyin: "Chájī shàng fàng zhe yīxiē zázhì.", english: "Some magazines are placed on the coffee table." },
            { simplified: "我在书桌上写作业。", pinyin: "Wǒ zài shūzhuō shàng xiě zuòyè.", english: "I do homework at my desk." },
            { simplified: "床头柜上有一盏小灯。", pinyin: "Chuáng tóu guì shàng yǒu yī zhǎn xiǎo dēng.", english: "There's a small lamp on the nightstand." },
            { simplified: "这些家电都很贵。", pinyin: "Zhèxiē jiādian dōu hěn guì.", english: "These home appliances are all expensive." },
            { simplified: "请把餐具放在桌子上。", pinyin: "Qǐng bǎ cānjù fàng zài zhuōzi shàng.", english: "Please put the tableware on the table." },
            { simplified: "我用筷子吃饭。", pinyin: "Wǒ yòng kuàizi chīfān.", english: "I eat with chopsticks." },
            { simplified: "外国人常常用叉子和刀子。", pinyin: "Wàiguórén chángcháng yòng cházi hé dāozi.", english: "Foreigners often use forks and knives." },
            { simplified: "这个杯子是玻璃做的。", pinyin: "Zhège bēizi shì bōli zuò de.", english: "This cup is made of glass." },
            { simplified: "洗完澡后用毛巾擦身体。", pinyin: "Xǐ wán zǎo hòu yòng máojīn cā shēntǐ.", english: "Use a towel to dry your body after bathing." },
            { simplified: "每天早上我都用牙刷刷牙。", pinyin: "Měitiān zǎoshang wǒ dōu yòng yáshuā shuāyá.", english: "I brush my teeth with a toothbrush every morning." }
        ]
    },
    
    18: {
    title: "Cooking and Kitchen",
    vocabulary: [
        { pinyin: "chúfáng", simplified: "厨房", traditional: "廚房", english: "kitchen" },
        { pinyin: "zuòfàn", simplified: "做饭", traditional: "做飯", english: "cook/make food" },
        { pinyin: "zhǔ", simplified: "煮", traditional: "煮", english: "boil/cook" },
        { pinyin: "chǎo", simplified: "炒", traditional: "炒", english: "stir-fry" },
        { pinyin: "zhēng", simplified: "蒸", traditional: "蒸", english: "steam" },
        { pinyin: "kǎo", simplified: "烤", traditional: "烤", english: "roast/bake" },
        { pinyin: "jiān", simplified: "煎", traditional: "煎", english: "fry/pan-fry" },
        { pinyin: "qiē", simplified: "切", traditional: "切", english: "cut/chop" },
        { pinyin: "xǐ", simplified: "洗", traditional: "洗", english: "wash" },
        { pinyin: "guō", simplified: "锅", traditional: "鍋", english: "pot/pan" },
        { pinyin: "dāo", simplified: "刀", traditional: "刀", english: "knife" },
        { pinyin: "kuàizi", simplified: "筷子", traditional: "筷子", english: "chopsticks" },
        { pinyin: "wǎn", simplified: "碗", traditional: "碗", english: "bowl" },
        { pinyin: "pánzi", simplified: "盘子", traditional: "盤子", english: "plate/dish" },
        { pinyin: "bēizi", simplified: "杯子", traditional: "杯子", english: "cup/glass" },
        { pinyin: "sháozi", simplified: "勺子", traditional: "勺子", english: "spoon" },
        { pinyin: "chāzi", simplified: "叉子", traditional: "叉子", english: "fork" },
        { pinyin: "cài", simplified: "菜", traditional: "菜", english: "dish/vegetable/cuisine" },
        { pinyin: "ròu", simplified: "肉", traditional: "肉", english: "meat" },
        { pinyin: "yú", simplified: "鱼", traditional: "魚", english: "fish" },
        { pinyin: "jī", simplified: "鸡", traditional: "雞", english: "chicken" },
        { pinyin: "zhūròu", simplified: "猪肉", traditional: "豬肉", english: "pork" },
        { pinyin: "niúròu", simplified: "牛肉", traditional: "牛肉", english: "beef" },
        { pinyin: "shūcài", simplified: "蔬菜", traditional: "蔬菜", english: "vegetables" },
        { pinyin: "yán", simplified: "盐", traditional: "鹽", english: "salt" },
        { pinyin: "táng", simplified: "糖", traditional: "糖", english: "sugar" },
        { pinyin: "yóu", simplified: "油", traditional: "油", english: "oil" },
        { pinyin: "cù", simplified: "醋", traditional: "醋", english: "vinegar" },
        { pinyin: "jiàngyóu", simplified: "酱油", traditional: "醬油", english: "soy sauce" },
        { pinyin: "là", simplified: "辣", traditional: "辣", english: "spicy/hot" },
        { pinyin: "tián", simplified: "甜", traditional: "甜", english: "sweet" },
        { pinyin: "suān", simplified: "酸", traditional: "酸", english: "sour" },
        { pinyin: "kǔ", simplified: "苦", traditional: "苦", english: "bitter" },
        { pinyin: "xiān", simplified: "咸", traditional: "鹹", english: "salty" },
        { pinyin: "wèidào", simplified: "味道", traditional: "味道", english: "taste/flavor" }
    ],
    sentences: [
        { simplified: "妈妈在厨房做饭。", pinyin: "Māma zài chúfáng zuòfàn.", english: "Mom is cooking in the kitchen." },
        { simplified: "我学会了炒菜。", pinyin: "Wǒ xuéhuì le chǎocài.", english: "I learned how to stir-fry vegetables." },
        { simplified: "请帮我切一下蔬菜。", pinyin: "Qǐng bāng wǒ qiē yīxià shūcài.", english: "Please help me chop the vegetables." },
        { simplified: "这个锅太小了。", pinyin: "Zhège guō tài xiǎo le.", english: "This pot is too small." },
        { simplified: "我需要一把刀。", pinyin: "Wǒ xūyào yī bǎ dāo.", english: "I need a knife." },
        { simplified: "筷子在桌子上。", pinyin: "Kuàizi zài zhuōzi shàng.", english: "The chopsticks are on the table." },
        { simplified: "这个碗很漂亮。", pinyin: "Zhège wǎn hěn piàoliang.", english: "This bowl is very beautiful." },
        { simplified: "盘子里有很多菜。", pinyin: "Pánzi lǐ yǒu hěn duō cài.", english: "There are many dishes on the plate." },
        { simplified: "请给我一个杯子。", pinyin: "Qǐng gěi wǒ yī gè bēizi.", english: "Please give me a cup." },
        { simplified: "我用勺子喝汤。", pinyin: "Wǒ yòng sháozi hē tāng.", english: "I use a spoon to drink soup." },
        { simplified: "外国人常用叉子吃饭。", pinyin: "Wàiguórén cháng yòng chāzi chīfàn.", english: "Foreigners often use forks to eat." },
        { simplified: "今天的菜很好吃。", pinyin: "Jīntiān de cài hěn hǎochī.", english: "Today's dishes are very delicious." },
        { simplified: "我不吃肉，只吃蔬菜。", pinyin: "Wǒ bù chī ròu, zhǐ chī shūcài.", english: "I don't eat meat, only vegetables." },
        { simplified: "这条鱼很新鲜。", pinyin: "Zhè tiáo yú hěn xīnxiān.", english: "This fish is very fresh." },
        { simplified: "烤鸡是我最喜欢的菜。", pinyin: "Kǎojī shì wǒ zuì xǐhuān de cài.", english: "Roast chicken is my favorite dish." },
        { simplified: "猪肉比牛肉便宜。", pinyin: "Zhūròu bǐ niúròu piányi.", english: "Pork is cheaper than beef." },
        { simplified: "牛肉面很有名。", pinyin: "Niúròu miàn hěn yǒumíng.", english: "Beef noodles are very famous." },
        { simplified: "多吃蔬菜对身体好。", pinyin: "Duō chī shūcài duì shēntǐ hǎo.", english: "Eating more vegetables is good for the body." },
        { simplified: "这个菜太咸了。", pinyin: "Zhège cài tài xián le.", english: "This dish is too salty." },
        { simplified: "请放一点盐。", pinyin: "Qǐng fàng yīdiǎn yán.", english: "Please add a little salt." },
        { simplified: "我喜欢吃甜的东西。", pinyin: "Wǒ xǐhuān chī tián de dōngxi.", english: "I like to eat sweet things." },
        { simplified: "炒菜需要放油。", pinyin: "Chǎocài xūyào fàng yóu.", english: "Stir-frying requires adding oil." },
        { simplified: "醋可以做凉菜。", pinyin: "Cù kěyǐ zuò liángcài.", english: "Vinegar can be used to make cold dishes." },
        { simplified: "酱油是中国菜常用的调料。", pinyin: "Jiàngyóu shì Zhōngguó cài cháng yòng de tiáoliào.", english: "Soy sauce is a commonly used seasoning in Chinese cuisine." },
        { simplified: "四川菜很辣。", pinyin: "Sìchuān cài hěn là.", english: "Sichuan cuisine is very spicy." },
        { simplified: "柠檬很酸。", pinyin: "Níngméng hěn suān.", english: "Lemons are very sour." },
        { simplified: "咖啡有点苦。", pinyin: "Kāfēi yǒudiǎn kǔ.", english: "Coffee is a bit bitter." },
        { simplified: "这道菜的味道很特别。", pinyin: "Zhè dào cài de wèidào hěn tèbié.", english: "This dish has a very special taste." },
        { simplified: "我正在学习中国菜的做法。", pinyin: "Wǒ zhèngzài xuéxí Zhōngguó cài de zuòfǎ.", english: "I am learning how to make Chinese dishes." },
        { simplified: "煮面条很简单。", pinyin: "Zhǔ miàntiáo hěn jiǎndān.", english: "Cooking noodles is very simple." },
        { simplified: "蒸蛋是一道简单的菜。", pinyin: "Zhēngdàn shì yī dào jiǎndān de cài.", english: "Steamed egg is a simple dish." },
        { simplified: "先洗菜，再切菜。", pinyin: "Xiān xǐcài, zài qiēcài.", english: "First wash the vegetables, then chop them." },
        { simplified: "这个锅可以煎鱼。", pinyin: "Zhège guō kěyǐ jiān yú.", english: "This pan can be used to fry fish." },
        { simplified: "烤箱可以烤面包。", pinyin: "Kǎoxiāng kěyǐ kǎo miànbāo.", english: "The oven can bake bread." },
        { simplified: "做菜是一门艺术。", pinyin: "Zuòcài shì yī mén yìshù.", english: "Cooking is an art." }
    ]
},
    
    19: {
    title: "Travel and Tourism",
    vocabulary: [
        { pinyin: "lǚxíng", simplified: "旅行", traditional: "旅行", english: "travel/trip" },
        { pinyin: "lǚyóu", simplified: "旅游", traditional: "旅遊", english: "tourism/sightseeing" },
        { pinyin: "jīchǎng", simplified: "机场", traditional: "機場", english: "airport" },
        { pinyin: "fēijī", simplified: "飞机", traditional: "飛機", english: "airplane" },
        { pinyin: "huǒchē", simplified: "火车", traditional: "火車", english: "train" },
        { pinyin: "huǒchēzhàn", simplified: "火车站", traditional: "火車站", english: "train station" },
        { pinyin: "qìchē", simplified: "汽车", traditional: "汽車", english: "car/bus" },
        { pinyin: "chūzūchē", simplified: "出租车", traditional: "出租車", english: "taxi" },
        { pinyin: "jiǔdiàn", simplified: "酒店", traditional: "酒店", english: "hotel" },
        { pinyin: "bīnguǎn", simplified: "宾馆", traditional: "賓館", english: "guesthouse/hotel" },
        { pinyin: "fángjiān", simplified: "房间", traditional: "房間", english: "room" },
        { pinyin: "dìngyù", simplified: "订", traditional: "訂", english: "to book/reserve" },
        { pinyin: "hùzhào", simplified: "护照", traditional: "護照", english: "passport" },
        { pinyin: "qiānzhèng", simplified: "签证", traditional: "簽證", english: "visa" },
        { pinyin: "xínglǐ", simplified: "行李", traditional: "行李", english: "luggage/baggage" },
        { pinyin: "xiāngzi", simplified: "箱子", traditional: "箱子", english: "suitcase/box" },
        { pinyin: "dìtú", simplified: "地图", traditional: "地圖", english: "map" },
        { pinyin: "dǎoyóu", simplified: "导游", traditional: "導遊", english: "tour guide" },
        { pinyin: "jǐngdiǎn", simplified: "景点", traditional: "景點", english: "scenic spot/attraction" },
        { pinyin: "bówùguǎn", simplified: "博物馆", traditional: "博物館", english: "museum" },
        { pinyin: "gōngyuán", simplified: "公园", traditional: "公園", english: "park" },
        { pinyin: "hǎibiān", simplified: "海边", traditional: "海邊", english: "seaside/beach" },
        { pinyin: "shān", simplified: "山", traditional: "山", english: "mountain" },
        { pinyin: "hú", simplified: "湖", traditional: "湖", english: "lake" },
        { pinyin: "chéngshì", simplified: "城市", traditional: "城市", english: "city" },
        { pinyin: "xiāngcūn", simplified: "乡村", traditional: "鄉村", english: "countryside/village" },
        { pinyin: "wénhuà", simplified: "文化", traditional: "文化", english: "culture" },
        { pinyin: "lìshǐ", simplified: "历史", traditional: "歷史", english: "history" },
        { pinyin: "zhàoxiàng", simplified: "照相", traditional: "照相", english: "take photos" },
        { pinyin: "xiūxi", simplified: "休息", traditional: "休息", english: "rest/relax" }
    ],
    sentences: [
        { simplified: "我们计划下个月去旅行。", pinyin: "Wǒmen jìhuà xià gè yuè qù lǚxíng.", english: "We plan to travel next month." },
        { simplified: "他喜欢到处旅游。", pinyin: "Tā xǐhuān dàochù lǚyóu.", english: "He likes to travel everywhere." },
        { simplified: "飞机两点从机场起飞。", pinyin: "Fēijī liǎng diǎn cóng jīchǎng qǐfēi.", english: "The plane takes off from the airport at 2 o'clock." },
        { simplified: "坐飞机比坐火车快。", pinyin: "Zuò fēijī bǐ zuò huǒchē kuài.", english: "Taking a plane is faster than taking a train." },
        { simplified: "火车站里人很多。", pinyin: "Huǒchēzhàn lǐ rén hěn duō.", english: "There are many people in the train station." },
        { simplified: "我们坐汽车去山上。", pinyin: "Wǒmen zuò qìchē qù shān shàng.", english: "We take a bus to go up the mountain." },
        { simplified: "叫一辆出租车到酒店。", pinyin: "Jiào yī liàng chūzūchē dào jiǔdiàn.", english: "Call a taxi to the hotel." },
        { simplified: "这个酒店很干净。", pinyin: "Zhège jiǔdiàn hěn gānjìng.", english: "This hotel is very clean." },
        { simplified: "宾馆的服务很好。", pinyin: "Bīnguǎn de fúwù hěn hǎo.", english: "The guesthouse's service is very good." },
        { simplified: "房间里有空调和电视。", pinyin: "Fángjiān lǐ yǒu kōngtiáo hé diànshì.", english: "The room has air conditioning and a TV." },
        { simplified: "我要订明天的房间。", pinyin: "Wǒ yào dìng míngtiān de fángjiān.", english: "I want to book a room for tomorrow." },
        { simplified: "出国旅行需要护照。", pinyin: "Chūguó lǚxíng xūyào hùzhào.", english: "Traveling abroad requires a passport." },
        { simplified: "去美国要申请签证。", pinyin: "Qù Měiguó yào shēnqǐng qiānzhèng.", english: "Going to America requires applying for a visa." },
        { simplified: "行李太多了，很重。", pinyin: "Xínglǐ tài duō le, hěn zhòng.", english: "There's too much luggage, it's very heavy." },
        { simplified: "把衣服放在箱子里。", pinyin: "Bǎ yīfu fàng zài xiāngzi lǐ.", english: "Put the clothes in the suitcase." },
        { simplified: "看地图找到景点的位置。", pinyin: "Kàn dìtú zhǎodào jǐngdiǎn de wèizhì.", english: "Look at the map to find the location of the scenic spot." },
        { simplified: "导游带我们参观博物馆。", pinyin: "Dǎoyóu dài wǒmen cānguān bówùguǎn.", english: "The tour guide takes us to visit the museum." },
        { simplified: "这个景点很有名。", pinyin: "Zhège jǐngdiǎn hěn yǒumíng.", english: "This scenic spot is very famous." },
        { simplified: "博物馆里有很多古董。", pinyin: "Bówùguǎn lǐ yǒu hěn duō gǔdǒng.", english: "There are many antiques in the museum." },
        { simplified: "公园里的花很漂亮。", pinyin: "Gōngyuán lǐ de huā hěn piàoliang.", english: "The flowers in the park are very beautiful." },
        { simplified: "我们在海边玩了一天。", pinyin: "Wǒmen zài hǎibiān wán le yī tiān.", english: "We played at the seaside for a day." },
        { simplified: "爬山很累但是很有趣。", pinyin: "Páshān hěn lèi dànshì hěn yǒuqù.", english: "Mountain climbing is tiring but very interesting." },
        { simplified: "湖水很清很蓝。", pinyin: "Hú shuǐ hěn qīng hěn lán.", english: "The lake water is very clear and blue." },
        { simplified: "这个城市有很多高楼。", pinyin: "Zhège chéngshì yǒu hěn duō gāolóu.", english: "This city has many tall buildings." },
        { simplified: "乡村的空气很新鲜。", pinyin: "Xiāngcūn de kōngqì hěn xīnxiān.", english: "The air in the countryside is very fresh." },
        { simplified: "了解当地的文化很重要。", pinyin: "Liǎojiě dāngdì de wénhuà hěn zhòngyào.", english: "Understanding local culture is very important." },
        { simplified: "这座城市有悠久的历史。", pinyin: "Zhè zuò chéngshì yǒu yōujiǔ de lìshǐ.", english: "This city has a long history." },
        { simplified: "我喜欢在景点照相。", pinyin: "Wǒ xǐhuān zài jǐngdiǎn zhàoxiàng.", english: "I like taking photos at scenic spots." },
        { simplified: "旅行累了要休息一下。", pinyin: "Lǚxíng lèi le yào xiūxi yīxià.", english: "When tired from traveling, you need to rest a bit." },
        { simplified: "旅游可以放松心情。", pinyin: "Lǚyóu kěyǐ fàngsōng xīnqíng.", english: "Tourism can help relax one's mood." }
    ]
},
    
    20: {
    title: "Culture and Festivals",
    vocabulary: [
        { pinyin: "wénhuà", simplified: "文化", traditional: "文化", english: "culture" },
        { pinyin: "jiérì", simplified: "节日", traditional: "節日", english: "festival/holiday" },
        { pinyin: "chuántǒng", simplified: "传统", traditional: "傳統", english: "tradition/traditional" },
        { pinyin: "xísú", simplified: "习俗", traditional: "習俗", english: "custom/practice" },
        { pinyin: "qìngzhù", simplified: "庆祝", traditional: "慶祝", english: "celebrate" },
        { pinyin: "chūnjié", simplified: "春节", traditional: "春節", english: "Spring Festival/Chinese New Year" },
        { pinyin: "zhōngqiūjié", simplified: "中秋节", traditional: "中秋節", english: "Mid-Autumn Festival" },
        { pinyin: "duānwǔjié", simplified: "端午节", traditional: "端午節", english: "Dragon Boat Festival" },
        { pinyin: "yuándànjié", simplified: "元旦节", traditional: "元旦節", english: "New Year's Day" },
        { pinyin: "guóqìngjié", simplified: "国庆节", traditional: "國慶節", english: "National Day" },
        { pinyin: "qīxījié", simplified: "七夕节", traditional: "七夕節", english: "Chinese Valentine's Day" },
        { pinyin: "lǐwù", simplified: "礼物", traditional: "禮物", english: "gift/present" },
        { pinyin: "hóngbāo", simplified: "红包", traditional: "紅包", english: "red envelope (money gift)" },
        { pinyin: "fàngbiānpào", simplified: "放鞭炮", traditional: "放鞭炮", english: "set off firecrackers" },
        { pinyin: "tiēduìlián", simplified: "贴对联", traditional: "貼對聯", english: "paste couplets" },
        { pinyin: "tuányuán", simplified: "团圆", traditional: "團圓", english: "reunion" },
        { pinyin: "yuèbing", simplified: "月饼", traditional: "月餅", english: "mooncake" },
        { pinyin: "zòngzi", simplified: "粽子", traditional: "粽子", english: "rice dumpling" },
        { pinyin: "jiǎozi", simplified: "饺子", traditional: "餃子", english: "dumpling" },
        { pinyin: "tāngyuán", simplified: "汤圆", traditional: "湯圓", english: "sweet rice ball" },
        { pinyin: "dēnglóng", simplified: "灯笼", traditional: "燈籠", english: "lantern" },
        { pinyin: "wǔlóng", simplified: "舞龙", traditional: "舞龍", english: "dragon dance" },
        { pinyin: "wǔshī", simplified: "舞狮", traditional: "舞獅", english: "lion dance" },
        { pinyin: "yānshuā", simplified: "烟花", traditional: "煙花", english: "fireworks" },
        { pinyin: "miào", simplified: "庙", traditional: "廟", english: "temple" },
        { pinyin: "jìzǔ", simplified: "祭祖", traditional: "祭祖", english: "worship ancestors" },
        { pinyin: "bàiniánhǎo", simplified: "拜年好", traditional: "拜年好", english: "New Year greetings" },
        { pinyin: "gōngxǐfācái", simplified: "恭喜发财", traditional: "恭喜發財", english: "wish you prosperity" },
        { pinyin: "xīnnián kuàilè", simplified: "新年快乐", traditional: "新年快樂", english: "Happy New Year" },
        { pinyin: "jiéqìng", simplified: "节庆", traditional: "節慶", english: "festival celebration" }
    ],
    sentences: [
        { simplified: "中国有很多传统文化。", pinyin: "Zhōngguó yǒu hěn duō chuántǒng wénhuà.", english: "China has many traditional cultures." },
        { simplified: "春节是最重要的节日。", pinyin: "Chūnjié shì zuì zhòngyào de jiérì.", english: "Spring Festival is the most important holiday." },
        { simplified: "我们家每年都庆祝中秋节。", pinyin: "Wǒmen jiā měinián dōu qìngzhù zhōngqiūjié.", english: "Our family celebrates Mid-Autumn Festival every year." },
        { simplified: "这个习俗已经有一千年了。", pinyin: "Zhège xísú yǐjīng yǒu yīqiān nián le.", english: "This custom has existed for a thousand years." },
        { simplified: "过年的时候要贴对联。", pinyin: "Guònián de shíhòu yào tiē duìlián.", english: "We need to paste couplets during New Year." },
        { simplified: "小孩子喜欢收红包。", pinyin: "Xiǎo háizi xǐhuān shōu hóngbāo.", english: "Children like to receive red envelopes." },
        { simplified: "中秋节我们要吃月饼。", pinyin: "Zhōngqiūjié wǒmen yào chī yuèbing.", english: "We eat mooncakes during Mid-Autumn Festival." },
        { simplified: "端午节的时候吃粽子。", pinyin: "Duānwǔjié de shíhòu chī zòngzi.", english: "We eat rice dumplings during Dragon Boat Festival." },
        { simplified: "除夕夜全家人包饺子。", pinyin: "Chúxīyè quánjiārén bāo jiǎozi.", english: "The whole family makes dumplings on New Year's Eve." },
        { simplified: "元宵节要吃汤圆。", pinyin: "Yuánxiāojié yào chī tāngyuán.", english: "We eat sweet rice balls during Lantern Festival." },
        { simplified: "街上挂着红色的灯笼。", pinyin: "Jiē shàng guà zhe hóngsè de dēnglóng.", english: "Red lanterns are hanging on the street." },
        { simplified: "新年晚上有舞龙表演。", pinyin: "Xīnnián wǎnshàng yǒu wǔlóng biǎoyǎn.", english: "There are dragon dance performances on New Year's night." },
        { simplified: "舞狮很热闹很有趣。", pinyin: "Wǔshī hěn rènào hěn yǒuqù.", english: "Lion dance is very lively and interesting." },
        { simplified: "晚上我们看烟花表演。", pinyin: "Wǎnshàng wǒmen kàn yānshuā biǎoyǎn.", english: "We watch fireworks shows at night." },
        { simplified: "过年不能放鞭炮了。", pinyin: "Guònián bù néng fàng biānpào le.", english: "We can't set off firecrackers during New Year anymore." },
        { simplified: "春节期间家人要团圆。", pinyin: "Chūnjié qījiān jiārén yào tuányuán.", english: "Family members should reunite during Spring Festival." },
        { simplified: "我给朋友买了一份礼物。", pinyin: "Wǒ gěi péngyǒu mǎi le yī fèn lǐwù.", english: "I bought a gift for my friend." },
        { simplified: "老人们去庙里拜神。", pinyin: "Lǎorénmen qù miào lǐ bài shén.", english: "The elderly go to temples to worship gods." },
        { simplified: "清明节我们去祭祖。", pinyin: "Qīngmíngjié wǒmen qù jìzǔ.", english: "We worship our ancestors during Qingming Festival." },
        { simplified: "大家互相说新年快乐。", pinyin: "Dàjiā hùxiāng shuō xīnnián kuàilè.", english: "Everyone says Happy New Year to each other." },
        { simplified: "恭喜发财，红包拿来！", pinyin: "Gōngxǐfācái, hóngbāo ná lái!", english: "Wish you prosperity, give me the red envelope!" },
        { simplified: "七夕节是中国的情人节。", pinyin: "Qīxījié shì Zhōngguó de qíngrénjié.", english: "Qixi Festival is China's Valentine's Day." },
        { simplified: "国庆节我们放假七天。", pinyin: "Guóqìngjié wǒmen fàngjià qī tiān.", english: "We have a seven-day holiday for National Day." },
        { simplified: "元旦节标志着新年开始。", pinyin: "Yuándànjié biāozhì zhe xīnnián kāishǐ.", english: "New Year's Day marks the beginning of the new year." },
        { simplified: "这些传统节庆很有意义。", pinyin: "Zhèxiē chuántǒng jiéqìng hěn yǒu yìyì.", english: "These traditional festivals are very meaningful." },
        { simplified: "现代人也要保持传统文化。", pinyin: "Xiàndàirén yě yào bǎochí chuántǒng wénhuà.", english: "Modern people should also preserve traditional culture." },
        { simplified: "每个民族都有自己的习俗。", pinyin: "Měi gè mínzú dōu yǒu zìjǐ de xísú.", english: "Every ethnic group has its own customs." },
        { simplified: "节日让生活更有色彩。", pinyin: "Jiérì ràng shēnghuó gèng yǒu sècǎi.", english: "Festivals make life more colorful." },
        { simplified: "庆祝节日能增进感情。", pinyin: "Qìngzhù jiérì néng zēngjìn gǎnqíng.", english: "Celebrating festivals can strengthen relationships." },
        { simplified: "中华文化源远流长。", pinyin: "Zhōnghuá wénhuà yuányuǎnliúcháng.", english: "Chinese culture has a long and rich history." }
    ]
},
    
    21: {
    title: "Business and Economy",
    vocabulary: [
        { pinyin: "gōngsī", simplified: "公司", traditional: "公司", english: "company" },
        { pinyin: "gōngzuò", simplified: "工作", traditional: "工作", english: "work/job" },
        { pinyin: "shēngyì", simplified: "生意", traditional: "生意", english: "business" },
        { pinyin: "qián", simplified: "钱", traditional: "錢", english: "money" },
        { pinyin: "jīngjì", simplified: "经济", traditional: "經濟", english: "economy" },
        { pinyin: "yínháng", simplified: "银行", traditional: "銀行", english: "bank" },
        { pinyin: "mǎi", simplified: "买", traditional: "買", english: "to buy" },
        { pinyin: "mài", simplified: "卖", traditional: "賣", english: "to sell" },
        { pinyin: "jiàgé", simplified: "价格", traditional: "價格", english: "price" },
        { pinyin: "shòuhuòyuán", simplified: "售货员", traditional: "售貨員", english: "salesperson" },
        { pinyin: "kèhù", simplified: "客户", traditional: "客戶", english: "customer/client" },
        { pinyin: "chǎnpǐn", simplified: "产品", traditional: "產品", english: "product" },
        { pinyin: "shìchǎng", simplified: "市场", traditional: "市場", english: "market" },
        { pinyin: "tóuzī", simplified: "投资", traditional: "投資", english: "investment" },
        { pinyin: "lìrùn", simplified: "利润", traditional: "利潤", english: "profit" },
        { pinyin: "jiāoyì", simplified: "交易", traditional: "交易", english: "transaction/trade" },
        { pinyin: "hétóng", simplified: "合同", traditional: "合同", english: "contract" },
        { pinyin: "guǎnlǐ", simplified: "管理", traditional: "管理", english: "management/to manage" },
        { pinyin: "jīnglǐ", simplified: "经理", traditional: "經理", english: "manager" },
        { pinyin: "yuángōng", simplified: "员工", traditional: "員工", english: "employee" },
        { pinyin: "gōngzī", simplified: "工资", traditional: "工資", english: "salary" },
        { pinyin: "jiànkāng", simplified: "健康", traditional: "健康", english: "health" },
        { pinyin: "bàngōngshì", simplified: "办公室", traditional: "辦公室", english: "office" },
        { pinyin: "huìyì", simplified: "会议", traditional: "會議", english: "meeting" },
        { pinyin: "xiàngmù", simplified: "项目", traditional: "項目", english: "project" },
        { pinyin: "jìhuà", simplified: "计划", traditional: "計劃", english: "plan" },
        { pinyin: "fāzhǎn", simplified: "发展", traditional: "發展", english: "development" },
        { pinyin: "chénggōng", simplified: "成功", traditional: "成功", english: "success" },
        { pinyin: "shībài", simplified: "失败", traditional: "失敗", english: "failure" },
        { pinyin: "jìngjì", simplified: "竞争", traditional: "競爭", english: "competition" }
    ],
    sentences: [
        { simplified: "他在一家大公司工作。", pinyin: "Tā zài yī jiā dà gōngsī gōngzuò.", english: "He works at a big company." },
        { simplified: "我爸爸做生意很多年了。", pinyin: "Wǒ bàba zuò shēngyì hěn duō nián le.", english: "My father has been doing business for many years." },
        { simplified: "这个月我赚了很多钱。", pinyin: "Zhège yuè wǒ zhuàn le hěn duō qián.", english: "I made a lot of money this month." },
        { simplified: "中国的经济发展很快。", pinyin: "Zhōngguó de jīngjì fāzhǎn hěn kuài.", english: "China's economy is developing very quickly." },
        { simplified: "我需要去银行取钱。", pinyin: "Wǒ xūyào qù yínháng qǔ qián.", english: "I need to go to the bank to withdraw money." },
        { simplified: "你想买什么产品？", pinyin: "Nǐ xiǎng mǎi shénme chǎnpǐn?", english: "What product do you want to buy?" },
        { simplified: "这家店的价格很便宜。", pinyin: "Zhè jiā diàn de jiàgé hěn piányí.", english: "This shop's prices are very cheap." },
        { simplified: "售货员很热情地介绍产品。", pinyin: "Shòuhuòyuán hěn rèqíng de jièshào chǎnpǐn.", english: "The salesperson enthusiastically introduced the products." },
        { simplified: "我们公司有很多客户。", pinyin: "Wǒmen gōngsī yǒu hěn duō kèhù.", english: "Our company has many customers." },
        { simplified: "这个市场很大很热闹。", pinyin: "Zhège shìchǎng hěn dà hěn rènao.", english: "This market is very big and lively." },
        { simplified: "他打算投资这个项目。", pinyin: "Tā dǎsuàn tóuzī zhège xiàngmù.", english: "He plans to invest in this project." },
        { simplified: "公司今年的利润增加了。", pinyin: "Gōngsī jīnnián de lìrùn zēngjiā le.", english: "The company's profit increased this year." },
        { simplified: "这笔交易很重要。", pinyin: "Zhè bǐ jiāoyì hěn zhòngyào.", english: "This transaction is very important." },
        { simplified: "我们需要签一个合同。", pinyin: "Wǒmen xūyào qiān yī gè hétóng.", english: "We need to sign a contract." },
        { simplified: "他负责管理这个部门。", pinyin: "Tā fùzé guǎnlǐ zhège bùmén.", english: "He is responsible for managing this department." },
        { simplified: "经理开会讨论新计划。", pinyin: "Jīnglǐ kāihuì tǎolùn xīn jìhuà.", english: "The manager held a meeting to discuss the new plan." },
        { simplified: "公司的员工都很努力。", pinyin: "Gōngsī de yuángōng dōu hěn nǔlì.", english: "The company's employees are all very hardworking." },
        { simplified: "我的工资每个月都一样。", pinyin: "Wǒ de gōngzī měi gè yuè dōu yīyàng.", english: "My salary is the same every month." },
        { simplified: "办公室里有很多电脑。", pinyin: "Bàngōngshì lǐ yǒu hěn duō diànnǎo.", english: "There are many computers in the office." },
        { simplified: "明天上午有一个重要会议。", pinyin: "Míngtiān shàngwǔ yǒu yī gè zhòngyào huìyì.", english: "There's an important meeting tomorrow morning." },
        { simplified: "这个项目需要三个月完成。", pinyin: "Zhège xiàngmù xūyào sān gè yuè wánchéng.", english: "This project needs three months to complete." },
        { simplified: "我们的计划很成功。", pinyin: "Wǒmen de jìhuà hěn chénggōng.", english: "Our plan is very successful." },
        { simplified: "公司的发展前景很好。", pinyin: "Gōngsī de fāzhǎn qiánjǐng hěn hǎo.", english: "The company's development prospects are very good." },
        { simplified: "他的生意失败了。", pinyin: "Tā de shēngyì shībài le.", english: "His business failed." },
        { simplified: "市场竞争很激烈。", pinyin: "Shìchǎng jìngjì hěn jīliè.", english: "Market competition is very fierce." },
        { simplified: "我想开一家小店。", pinyin: "Wǒ xiǎng kāi yī jiā xiǎo diàn.", english: "I want to open a small shop." },
        { simplified: "这家银行的服务很好。", pinyin: "Zhè jiā yínháng de fúwù hěn hǎo.", english: "This bank's service is very good." },
        { simplified: "客户对我们的产品很满意。", pinyin: "Kèhù duì wǒmen de chǎnpǐn hěn mǎnyì.", english: "Customers are very satisfied with our products." },
        { simplified: "经理正在和客户谈生意。", pinyin: "Jīnglǐ zhèngzài hé kèhù tán shēngyì.", english: "The manager is talking business with customers." },
        { simplified: "做生意需要很多经验。", pinyin: "Zuò shēngyì xūyào hěn duō jīngyàn.", english: "Doing business requires a lot of experience." }
    ]
},
    
    22: {
    title: "Environment and Geography",
    vocabulary: [
        { pinyin: "huánjìng", simplified: "环境", traditional: "環境", english: "environment" },
        { pinyin: "dìqiú", simplified: "地球", traditional: "地球", english: "Earth/globe" },
        { pinyin: "dàqì", simplified: "大气", traditional: "大氣", english: "atmosphere" },
        { pinyin: "qìhòu", simplified: "气候", traditional: "氣候", english: "climate" },
        { pinyin: "wēndù", simplified: "温度", traditional: "溫度", english: "temperature" },
        { pinyin: "sēnlín", simplified: "森林", traditional: "森林", english: "forest" },
        { pinyin: "shùmù", simplified: "树木", traditional: "樹木", english: "trees" },
        { pinyin: "cǎodì", simplified: "草地", traditional: "草地", english: "grassland" },
        { pinyin: "shāmò", simplified: "沙漠", traditional: "沙漠", english: "desert" },
        { pinyin: "hǎiyáng", simplified: "海洋", traditional: "海洋", english: "ocean" },
        { pinyin: "hé", simplified: "河", traditional: "河", english: "river" },
        { pinyin: "hú", simplified: "湖", traditional: "湖", english: "lake" },
        { pinyin: "shān", simplified: "山", traditional: "山", english: "mountain" },
        { pinyin: "dǎo", simplified: "岛", traditional: "島", english: "island" },
        { pinyin: "dàlù", simplified: "大陆", traditional: "大陸", english: "continent" },
        { pinyin: "guójiā", simplified: "国家", traditional: "國家", english: "country" },
        { pinyin: "chéngshì", simplified: "城市", traditional: "城市", english: "city" },
        { pinyin: "xiāngcūn", simplified: "乡村", traditional: "鄉村", english: "countryside/village" },
        { pinyin: "nóngcūn", simplified: "农村", traditional: "農村", english: "rural area" },
        { pinyin: "dìtú", simplified: "地图", traditional: "地圖", english: "map" },
        { pinyin: "fāngxiàng", simplified: "方向", traditional: "方向", english: "direction" },
        { pinyin: "dōng", simplified: "东", traditional: "東", english: "east" },
        { pinyin: "xī", simplified: "西", traditional: "西", english: "west" },
        { pinyin: "nán", simplified: "南", traditional: "南", english: "south" },
        { pinyin: "běi", simplified: "北", traditional: "北", english: "north" },
        { pinyin: "wūrǎn", simplified: "污染", traditional: "污染", english: "pollution" },
        { pinyin: "bǎohù", simplified: "保护", traditional: "保護", english: "protect" },
        { pinyin: "gānjìng", simplified: "干净", traditional: "乾淨", english: "clean" },
        { pinyin: "zàng", simplified: "脏", traditional: "髒", english: "dirty" },
        { pinyin: "kōngqì", simplified: "空气", traditional: "空氣", english: "air" }
    ],
    sentences: [
        { simplified: "我们要保护环境。", pinyin: "Wǒmen yào bǎohù huánjìng.", english: "We need to protect the environment." },
        { simplified: "地球是我们的家。", pinyin: "Dìqiú shì wǒmen de jiā.", english: "Earth is our home." },
        { simplified: "这里的大气很清新。", pinyin: "Zhèlǐ de dàqì hěn qīngxīn.", english: "The atmosphere here is very fresh." },
        { simplified: "这个地方的气候很好。", pinyin: "Zhège dìfāng de qìhòu hěn hǎo.", english: "The climate of this place is very good." },
        { simplified: "今天的温度是二十度。", pinyin: "Jīntiān de wēndù shì èrshí dù.", english: "Today's temperature is 20 degrees." },
        { simplified: "森林里有很多动物。", pinyin: "Sēnlín lǐ yǒu hěn duō dòngwù.", english: "There are many animals in the forest." },
        { simplified: "公园里的树木很美。", pinyin: "Gōngyuán lǐ de shùmù hěn měi.", english: "The trees in the park are beautiful." },
        { simplified: "马在草地上吃草。", pinyin: "Mǎ zài cǎodì shàng chī cǎo.", english: "Horses eat grass on the grassland." },
        { simplified: "沙漠里很少下雨。", pinyin: "Shāmò lǐ hěn shǎo xiàyǔ.", english: "It rarely rains in the desert." },
        { simplified: "海洋占地球大部分面积。", pinyin: "Hǎiyáng zhàn dìqiú dà bùfèn miànjī.", english: "Oceans cover most of the Earth's surface." },
        { simplified: "这条河很长很宽。", pinyin: "Zhè tiáo hé hěn cháng hěn kuān.", english: "This river is very long and wide." },
        { simplified: "湖水很清很蓝。", pinyin: "Hú shuǐ hěn qīng hěn lán.", english: "The lake water is very clear and blue." },
        { simplified: "我们爬山爬了三个小时。", pinyin: "Wǒmen páshān pá le sān gè xiǎoshí.", english: "We climbed the mountain for three hours." },
        { simplified: "这个岛上住着很多人。", pinyin: "Zhège dǎo shàng zhù zhe hěn duō rén.", english: "Many people live on this island." },
        { simplified: "亚洲是最大的大陆。", pinyin: "Yàzhōu shì zuì dà de dàlù.", english: "Asia is the largest continent." },
        { simplified: "中国是一个大国家。", pinyin: "Zhōngguó shì yī gè dà guójiā.", english: "China is a big country." },
        { simplified: "北京是中国的首都城市。", pinyin: "Běijīng shì Zhōngguó de shǒudū chéngshì.", english: "Beijing is China's capital city." },
        { simplified: "乡村的空气比城市好。", pinyin: "Xiāngcūn de kōngqì bǐ chéngshì hǎo.", english: "The air in the countryside is better than in the city." },
        { simplified: "他的家在农村。", pinyin: "Tā de jiā zài nóngcūn.", english: "His home is in the rural area." },
        { simplified: "我用地图找路。", pinyin: "Wǒ yòng dìtú zhǎolù.", english: "I use a map to find my way." },
        { simplified: "你知道这个方向吗？", pinyin: "Nǐ zhīdào zhège fāngxiàng ma?", english: "Do you know this direction?" },
        { simplified: "太阳从东边出来。", pinyin: "Tàiyáng cóng dōngbiān chūlái.", english: "The sun rises from the east." },
        { simplified: "我家在学校的西边。", pinyin: "Wǒ jiā zài xuéxiào de xībiān.", english: "My home is to the west of the school." },
        { simplified: "南方比北方热。", pinyin: "Nánfāng bǐ běifāng rè.", english: "The south is hotter than the north." },
        { simplified: "北京在中国的北边。", pinyin: "Běijīng zài Zhōngguó de běibiān.", english: "Beijing is in the north of China." },
        { simplified: "空气污染很严重。", pinyin: "Kōngqì wūrǎn hěn yánzhòng.", english: "Air pollution is very serious." },
        { simplified: "我们必须保护动物。", pinyin: "Wǒmen bìxū bǎohù dòngwù.", english: "We must protect animals." },
        { simplified: "这个房间很干净。", pinyin: "Zhège fángjiān hěn gānjìng.", english: "This room is very clean." },
        { simplified: "衣服脏了要洗。", pinyin: "Yīfu zāng le yào xǐ.", english: "Dirty clothes need to be washed." },
        { simplified: "新鲜空气对健康很重要。", pinyin: "Xīnxiān kōngqì duì jiànkāng hěn zhòngyào.", english: "Fresh air is very important for health." }
    ]
},
    
    23: {
    title: "Art and Entertainment",
    vocabulary: [
        { pinyin: "yìshù", simplified: "艺术", traditional: "藝術", english: "art" },
        { pinyin: "huàhuà", simplified: "画画", traditional: "畫畫", english: "to draw/paint" },
        { pinyin: "huà", simplified: "画", traditional: "畫", english: "painting/picture" },
        { pinyin: "yīnyuè", simplified: "音乐", traditional: "音樂", english: "music" },
        { pinyin: "chànggē", simplified: "唱歌", traditional: "唱歌", english: "to sing" },
        { pinyin: "gē", simplified: "歌", traditional: "歌", english: "song" },
        { pinyin: "wǔdǎo", simplified: "舞蹈", traditional: "舞蹈", english: "dance" },
        { pinyin: "tiàowǔ", simplified: "跳舞", traditional: "跳舞", english: "to dance" },
        { pinyin: "diànyǐng", simplified: "电影", traditional: "電影", english: "movie/film" },
        { pinyin: "diànshì", simplified: "电视", traditional: "電視", english: "television" },
        { pinyin: "xìjù", simplified: "戏剧", traditional: "戲劇", english: "drama/theater" },
        { pinyin: "yǎnchū", simplified: "演出", traditional: "演出", english: "performance/show" },
        { pinyin: "yǎnyuán", simplified: "演员", traditional: "演員", english: "actor/actress" },
        { pinyin: "dǎoyǎn", simplified: "导演", traditional: "導演", english: "director" },
        { pinyin: "xiǎoshuō", simplified: "小说", traditional: "小說", english: "novel" },
        { pinyin: "shī", simplified: "诗", traditional: "詩", english: "poem/poetry" },
        { pinyin: "shū", simplified: "书", traditional: "書", english: "book" },
        { pinyin: "bàozhǐ", simplified: "报纸", traditional: "報紙", english: "newspaper" },
        { pinyin: "zázhì", simplified: "杂志", traditional: "雜誌", english: "magazine" },
        { pinyin: "bówùguǎn", simplified: "博物馆", traditional: "博物館", english: "museum" },
        { pinyin: "měishùguǎn", simplified: "美术馆", traditional: "美術館", english: "art gallery" },
        { pinyin: "túshūguǎn", simplified: "图书馆", traditional: "圖書館", english: "library" },
        { pinyin: "jùchǎng", simplified: "剧场", traditional: "劇場", english: "theater" },
        { pinyin: "yīnyuètīng", simplified: "音乐厅", traditional: "音樂廳", english: "concert hall" },
        { pinyin: "gānggāng", simplified: "钢琴", traditional: "鋼琴", english: "piano" },
        { pinyin: "jítā", simplified: "吉他", traditional: "吉他", english: "guitar" },
        { pinyin: "xiǎotíqín", simplified: "小提琴", traditional: "小提琴", english: "violin" },
        { pinyin: "shèyǐng", simplified: "摄影", traditional: "攝影", english: "photography" },
        { pinyin: "zhàopiàn", simplified: "照片", traditional: "照片", english: "photograph" },
        { pinyin: "yóuxì", simplified: "游戏", traditional: "遊戲", english: "game" },
        { pinyin: "kǎlā'ōukē", simplified: "卡拉OK", traditional: "卡拉OK", english: "karaoke" },
        { pinyin: "pàiduì", simplified: "派对", traditional: "派對", english: "party" },
        { pinyin: "jiémù", simplified: "节目", traditional: "節目", english: "program/show" },
        { pinyin: "wǎngluò", simplified: "网络", traditional: "網絡", english: "internet/network" },
        { pinyin: "wénxué", simplified: "文学", traditional: "文學", english: "literature" },
        { pinyin: "wénhuà", simplified: "文化", traditional: "文化", english: "culture" },
        { pinyin: "chuàngzuò", simplified: "创作", traditional: "創作", english: "to create/creation" },
        { pinyin: "zuòjiā", simplified: "作家", traditional: "作家", english: "writer/author" },
        { pinyin: "huàjiā", simplified: "画家", traditional: "畫家", english: "painter/artist" },
        { pinyin: "yīnyuèjiā", simplified: "音乐家", traditional: "音樂家", english: "musician" }
    ],
    sentences: [
        { simplified: "我喜欢艺术，特别是绘画。", pinyin: "Wǒ xǐhuān yìshù, tèbié shì huìhuà.", english: "I like art, especially painting." },
        { simplified: "她正在画一幅美丽的画。", pinyin: "Tā zhèngzài huà yī fú měilì de huà.", english: "She is painting a beautiful picture." },
        { simplified: "这首歌的音乐很好听。", pinyin: "Zhè shǒu gē de yīnyuè hěn hǎotīng.", english: "The music of this song sounds very nice." },
        { simplified: "小明唱歌唱得很好。", pinyin: "Xiǎo míng chànggē chàng de hěn hǎo.", english: "Xiao Ming sings very well." },
        { simplified: "我们去看舞蹈表演吧。", pinyin: "Wǒmen qù kàn wǔdǎo biǎoyǎn ba.", english: "Let's go watch a dance performance." },
        { simplified: "她从小就学跳舞。", pinyin: "Tā cóngxiǎo jiù xué tiàowǔ.", english: "She has been learning to dance since childhood." },
        { simplified: "昨天晚上我看了一部电影。", pinyin: "Zuótiān wǎnshàng wǒ kàn le yī bù diànyǐng.", english: "I watched a movie last night." },
        { simplified: "爷爷每天晚上看电视新闻。", pinyin: "Yéye měitiān wǎnshàng kàn diànshì xīnwén.", english: "Grandpa watches TV news every evening." },
        { simplified: "这个戏剧的故事很有意思。", pinyin: "Zhège xìjù de gùshì hěn yǒu yìsi.", english: "The story of this drama is very interesting." },
        { simplified: "今晚有一场精彩的演出。", pinyin: "Jīnwǎn yǒu yī chǎng jīngcǎi de yǎnchū.", english: "There's a wonderful performance tonight." },
        { simplified: "那个演员演得非常好。", pinyin: "Nàge yǎnyuán yǎn de fēicháng hǎo.", english: "That actor performed very well." },
        { simplified: "这部电影的导演很有名。", pinyin: "Zhè bù diànyǐng de dǎoyǎn hěn yǒumíng.", english: "The director of this movie is very famous." },
        { simplified: "我正在读一本有趣的小说。", pinyin: "Wǒ zhèngzài dú yī běn yǒuqù de xiǎoshuō.", english: "I'm reading an interesting novel." },
        { simplified: "他写了一首美丽的诗。", pinyin: "Tā xiě le yī shǒu měilì de shī.", english: "He wrote a beautiful poem." },
        { simplified: "这本书很受年轻人欢迎。", pinyin: "Zhè běn shū hěn shòu niánqīngrén huānyíng.", english: "This book is very popular with young people." },
        { simplified: "我每天早上看报纸。", pinyin: "Wǒ měitiān zǎoshàng kàn bàozhǐ.", english: "I read the newspaper every morning." },
        { simplified: "她订了几本时尚杂志。", pinyin: "Tā dìng le jǐ běn shíshàng zázhì.", english: "She subscribed to several fashion magazines." },
        { simplified: "周末我们去博物馆参观。", pinyin: "Zhōumò wǒmen qù bówùguǎn cānguān.", english: "We visit the museum on weekends." },
        { simplified: "美术馆里有很多名画。", pinyin: "Měishùguǎn lǐ yǒu hěn duō mínghuà.", english: "There are many famous paintings in the art gallery." },
        { simplified: "图书馆是学习的好地方。", pinyin: "Túshūguǎn shì xuéxí de hǎo dìfāng.", english: "The library is a good place for studying." },
        { simplified: "剧场里坐满了观众。", pinyin: "Jùchǎng lǐ zuòmǎn le guānzhòng.", english: "The theater was filled with audience." },
        { simplified: "音乐厅的音响效果很好。", pinyin: "Yīnyuètīng de yīnxiǎng xiàoguǒ hěn hǎo.", english: "The sound effects in the concert hall are very good." },
        { simplified: "她从六岁开始学钢琴。", pinyin: "Tā cóng liù suì kāishǐ xué gānggāng.", english: "She started learning piano from age six." },
        { simplified: "哥哥会弹吉他。", pinyin: "Gēge huì tán jítā.", english: "My older brother can play guitar." },
        { simplified: "小提琴的声音很优美。", pinyin: "Xiǎotíqín de shēngyīn hěn yōuměi.", english: "The sound of the violin is very beautiful." },
        { simplified: "摄影是他的业余爱好。", pinyin: "Shèyǐng shì tā de yèyú àihào.", english: "Photography is his hobby." },
        { simplified: "这张照片拍得很好。", pinyin: "Zhè zhāng zhàopiàn pāi de hěn hǎo.", english: "This photograph was taken very well." },
        { simplified: "孩子们喜欢玩电脑游戏。", pinyin: "Háizimen xǐhuān wán diànnǎo yóuxì.", english: "Children like playing computer games." },
        { simplified: "朋友们一起去唱卡拉OK。", pinyin: "Péngyǒumen yīqǐ qù chàng kǎlā'ōukē.", english: "Friends go to karaoke together." },
        { simplified: "生日派对很热闹。", pinyin: "Shēngrì pàiduì hěn rènào.", english: "The birthday party was very lively." },
        { simplified: "今晚的电视节目很精彩。", pinyin: "Jīnwǎn de diànshì jiémù hěn jīngcǎi.", english: "Tonight's TV programs are very exciting." },
        { simplified: "现在很多人通过网络看电影。", pinyin: "Xiànzài hěn duō rén tōngguò wǎngluò kàn diànyǐng.", english: "Now many people watch movies through the internet." },
        { simplified: "中国古代文学很有名。", pinyin: "Zhōngguó gǔdài wénxué hěn yǒumíng.", english: "Ancient Chinese literature is very famous." },
        { simplified: "每个国家都有自己的文化。", pinyin: "Měi gè guójiā dōu yǒu zìjǐ de wénhuà.", english: "Every country has its own culture." },
        { simplified: "他正在创作一部新小说。", pinyin: "Tā zhèngzài chuàngzuò yī bù xīn xiǎoshuō.", english: "He is creating a new novel." },
        { simplified: "这位作家写了很多好书。", pinyin: "Zhè wèi zuòjiā xiě le hěn duō hǎo shū.", english: "This writer has written many good books." },
        { simplified: "那个画家的作品很受欢迎。", pinyin: "Nàge huàjiā de zuòpǐn hěn shòu huānyíng.", english: "That painter's works are very popular." },
        { simplified: "音乐家在舞台上演奏。", pinyin: "Yīnyuèjiā zài wǔtái shàng yǎnzòu.", english: "The musician is performing on stage." },
        { simplified: "艺术可以表达人的感情。", pinyin: "Yìshù kěyǐ biǎodá rén de gǎnqíng.", english: "Art can express people's emotions." },
        { simplified: "欣赏艺术作品让人心情愉快。", pinyin: "Xīnshǎng yìshù zuòpǐn ràng rén xīnqíng yúkuài.", english: "Appreciating artworks makes people feel happy." }
    ]
},
    
    24: {
    title: "Medicine and Hospital",
    vocabulary: [
        { pinyin: "yīyuàn", simplified: "医院", traditional: "醫院", english: "hospital" },
        { pinyin: "yīshēng", simplified: "医生", traditional: "醫生", english: "doctor" },
        { pinyin: "hùshi", simplified: "护士", traditional: "護士", english: "nurse" },
        { pinyin: "bìng", simplified: "病", traditional: "病", english: "illness/disease" },
        { pinyin: "shēngbìng", simplified: "生病", traditional: "生病", english: "to get sick" },
        { pinyin: "yào", simplified: "药", traditional: "藥", english: "medicine" },
        { pinyin: "chīyào", simplified: "吃药", traditional: "吃藥", english: "to take medicine" },
        { pinyin: "zhēnduàn", simplified: "诊断", traditional: "診斷", english: "diagnosis" },
        { pinyin: "jiǎnchá", simplified: "检查", traditional: "檢查", english: "examination/to check" },
        { pinyin: "zhìliáo", simplified: "治疗", traditional: "治療", english: "treatment/to treat" },
        { pinyin: "shǒushù", simplified: "手术", traditional: "手術", english: "surgery/operation" },
        { pinyin: "dǎzhēn", simplified: "打针", traditional: "打針", english: "to give/get an injection" },
        { pinyin: "fā shāo", simplified: "发烧", traditional: "發燒", english: "to have a fever" },
        { pinyin: "késou", simplified: "咳嗽", traditional: "咳嗽", english: "to cough" },
        { pinyin: "gǎnmào", simplified: "感冒", traditional: "感冒", english: "cold/flu" },
        { pinyin: "tóutòng", simplified: "头痛", traditional: "頭痛", english: "headache" },
        { pinyin: "dùzi tòng", simplified: "肚子痛", traditional: "肚子痛", english: "stomachache" },
        { pinyin: "yáotòng", simplified: "牙痛", traditional: "牙痛", english: "toothache" },
        { pinyin: "shāngkǒu", simplified: "伤口", traditional: "傷口", english: "wound" },
        { pinyin: "xuèyā", simplified: "血压", traditional: "血壓", english: "blood pressure" },
        { pinyin: "tǐwēn", simplified: "体温", traditional: "體溫", english: "body temperature" },
        { pinyin: "yàofáng", simplified: "药房", traditional: "藥房", english: "pharmacy" },
        { pinyin: "guàhào", simplified: "挂号", traditional: "掛號", english: "to register (at hospital)" },
        { pinyin: "páiduì", simplified: "排队", traditional: "排隊", english: "to queue/line up" },
        { pinyin: "jiànkāng", simplified: "健康", traditional: "健康", english: "health/healthy" },
        { pinyin: "bǎoyǎng", simplified: "保养", traditional: "保養", english: "to maintain/take care of" },
        { pinyin: "yùfáng", simplified: "预防", traditional: "預防", english: "to prevent" },
        { pinyin: "kāngfù", simplified: "康复", traditional: "康復", english: "recovery/to recover" },
        { pinyin: "jíjiù", simplified: "急救", traditional: "急救", english: "first aid/emergency care" },
        { pinyin: "bìngfáng", simplified: "病房", traditional: "病房", english: "hospital ward/room" }
    ],
    sentences: [
        { simplified: "我今天要去医院看病。", pinyin: "Wǒ jīntiān yào qù yīyuàn kànbìng.", english: "I'm going to the hospital to see a doctor today." },
        { simplified: "医生说我需要多休息。", pinyin: "Yīshēng shuō wǒ xūyào duō xiūxí.", english: "The doctor says I need more rest." },
        { simplified: "护士给我量了体温。", pinyin: "Hùshi gěi wǒ liáng le tǐwēn.", english: "The nurse took my temperature." },
        { simplified: "我的孩子生病了。", pinyin: "Wǒ de háizi shēngbìng le.", english: "My child is sick." },
        { simplified: "这个药一天吃三次。", pinyin: "Zhège yào yītiān chī sān cì.", english: "Take this medicine three times a day." },
        { simplified: "医生给我做了详细检查。", pinyin: "Yīshēng gěi wǒ zuò le xiángxì jiǎnchá.", english: "The doctor gave me a detailed examination." },
        { simplified: "他需要做手术治疗。", pinyin: "Tā xūyào zuò shǒushù zhìliáo.", english: "He needs surgery for treatment." },
        { simplified: "小孩害怕打针。", pinyin: "Xiǎohái hàipà dǎzhēn.", english: "Children are afraid of injections." },
        { simplified: "我昨天发烧了。", pinyin: "Wǒ zuótiān fā shāo le.", english: "I had a fever yesterday." },
        { simplified: "他一直在咳嗽。", pinyin: "Tā yīzhí zài késou.", english: "He keeps coughing." },
        { simplified: "我感冒了，不能上班。", pinyin: "Wǒ gǎnmào le, bù néng shàngbān.", english: "I have a cold and can't go to work." },
        { simplified: "她经常头痛。", pinyin: "Tā jīngcháng tóutòng.", english: "She often has headaches." },
        { simplified: "吃了不干净的东西会肚子痛。", pinyin: "Chī le bù gānjìng de dōngxi huì dùzi tòng.", english: "Eating unclean food can cause stomachaches." },
        { simplified: "我牙痛得厉害。", pinyin: "Wǒ yáotòng de lìhài.", english: "I have a severe toothache." },
        { simplified: "伤口需要每天换药。", pinyin: "Shāngkǒu xūyào měitiān huànyào.", english: "The wound needs daily dressing changes." },
        { simplified: "老人要经常测血压。", pinyin: "Lǎorén yào jīngcháng cè xuèyā.", english: "Elderly people should check their blood pressure regularly." },
        { simplified: "去药房买药需要处方。", pinyin: "Qù yàofáng mǎi yào xūyào chǔfāng.", english: "You need a prescription to buy medicine at the pharmacy." },
        { simplified: "先去挂号，然后等医生。", pinyin: "Xiān qù guàhào, ránhòu děng yīshēng.", english: "First register, then wait for the doctor." },
        { simplified: "医院里很多人在排队。", pinyin: "Yīyuàn lǐ hěn duō rén zài páiduì.", english: "Many people are queuing in the hospital." },
        { simplified: "保持健康很重要。", pinyin: "Bǎochí jiànkāng hěn zhòngyào.", english: "Maintaining health is very important." },
        { simplified: "要好好保养身体。", pinyin: "Yào hǎohāo bǎoyǎng shēntǐ.", english: "You should take good care of your body." },
        { simplified: "预防比治疗更重要。", pinyin: "Yùfáng bǐ zhìliáo gèng zhòngyào.", english: "Prevention is more important than treatment." },
        { simplified: "病人正在康复中。", pinyin: "Bìngrén zhèngzài kāngfù zhōng.", english: "The patient is recovering." },
        { simplified: "学会急救很有用。", pinyin: "Xuéhuì jíjiù hěn yǒuyòng.", english: "Learning first aid is very useful." },
        { simplified: "病房里很安静。", pinyin: "Bìngfáng lǐ hěn ānjìng.", english: "The hospital room is very quiet." },
        { simplified: "这种病很难诊断。", pinyin: "Zhè zhǒng bìng hěn nán zhēnduàn.", english: "This disease is difficult to diagnose." },
        { simplified: "医生建议我住院观察。", pinyin: "Yīshēng jiànyì wǒ zhùyuàn guānchá.", english: "The doctor suggests I stay in the hospital for observation." },
        { simplified: "现代医学发展很快。", pinyin: "Xiàndài yīxué fāzhǎn hěn kuài.", english: "Modern medicine is developing rapidly." },
        { simplified: "定期体检对健康有好处。", pinyin: "Dìngqī tǐjiǎn duì jiànkāng yǒu hǎochù.", english: "Regular health checkups are beneficial for health." },
        { simplified: "生病的时候要多喝水多休息。", pinyin: "Shēngbìng de shíhòu yào duō hē shuǐ duō xiūxí.", english: "When sick, you should drink more water and rest more." }
    ]
},
    
    25: {
    title: "Law and Government",
    vocabulary: [
        { pinyin: "fǎlǜ", simplified: "法律", traditional: "法律", english: "law" },
        { pinyin: "zhèngfǔ", simplified: "政府", traditional: "政府", english: "government" },
        { pinyin: "guójiā", simplified: "国家", traditional: "國家", english: "country/nation" },
        { pinyin: "shìzhǎng", simplified: "市长", traditional: "市長", english: "mayor" },
        { pinyin: "jǐngchá", simplified: "警察", traditional: "警察", english: "police" },
        { pinyin: "fǎguān", simplified: "法官", traditional: "法官", english: "judge" },
        { pinyin: "lǜshī", simplified: "律师", traditional: "律師", english: "lawyer" },
        { pinyin: "fǎyuàn", simplified: "法院", traditional: "法院", english: "court" },
        { pinyin: "jiānkāng", simplified: "监狱", traditional: "監獄", english: "prison" },
        { pinyin: "xuǎnjǔ", simplified: "选举", traditional: "選舉", english: "election" },
        { pinyin: "tóupiào", simplified: "投票", traditional: "投票", english: "vote" },
        { pinyin: "mínzhǔ", simplified: "民主", traditional: "民主", english: "democracy" },
        { pinyin: "zìyóu", simplified: "自由", traditional: "自由", english: "freedom" },
        { pinyin: "quánlì", simplified: "权利", traditional: "權利", english: "rights" },
        { pinyin: "yìwù", simplified: "义务", traditional: "義務", english: "duty/obligation" },
        { pinyin: "gōngmín", simplified: "公民", traditional: "公民", english: "citizen" },
        { pinyin: "shěnpàn", simplified: "审判", traditional: "審判", english: "trial" },
        { pinyin: "zuìfàn", simplified: "罪犯", traditional: "罪犯", english: "criminal" },
        { pinyin: "fánjīn", simplified: "犯罪", traditional: "犯罪", english: "crime" },
        { pinyin: "ānquán", simplified: "安全", traditional: "安全", english: "safety/security" },
        { pinyin: "bǎohù", simplified: "保护", traditional: "保護", english: "protect" },
        { pinyin: "guīdìng", simplified: "规定", traditional: "規定", english: "regulation/rule" },
        { pinyin: "zhèngcè", simplified: "政策", traditional: "政策", english: "policy" },
        { pinyin: "fúwù", simplified: "服务", traditional: "服務", english: "service" },
        { pinyin: "bàngōngshì", simplified: "办公室", traditional: "辦公室", english: "office" },
        { pinyin: "huìyì", simplified: "会议", traditional: "會議", english: "meeting" },
        { pinyin: "juédìng", simplified: "决定", traditional: "決定", english: "decision" },
        { pinyin: "tǎolùn", simplified: "讨论", traditional: "討論", english: "discuss" }
    ],
    sentences: [
        { simplified: "每个国家都有自己的法律。", pinyin: "Měi gè guójiā dōu yǒu zìjǐ de fǎlǜ.", english: "Every country has its own laws." },
        { simplified: "政府为人民服务。", pinyin: "Zhèngfǔ wèi rénmín fúwù.", english: "The government serves the people." },
        { simplified: "市长今天开会。", pinyin: "Shìzhǎng jīntiān kāihuì.", english: "The mayor has a meeting today." },
        { simplified: "警察保护市民的安全。", pinyin: "Jǐngchá bǎohù shìmín de ānquán.", english: "Police protect the safety of citizens." },
        { simplified: "法官在法院工作。", pinyin: "Fǎguān zài fǎyuàn gōngzuò.", english: "Judges work in the court." },
        { simplified: "律师帮助客人解决问题。", pinyin: "Lǜshī bāngzhù kèrén jiějué wèntí.", english: "Lawyers help clients solve problems." },
        { simplified: "罪犯被送到监狱。", pinyin: "Zuìfàn bèi sòng dào jiānkāng.", english: "Criminals are sent to prison." },
        { simplified: "明年有总统选举。", pinyin: "Míngnián yǒu zǒngtǒng xuǎnjǔ.", english: "There's a presidential election next year." },
        { simplified: "公民有投票的权利。", pinyin: "Gōngmín yǒu tóupiào de quánlì.", english: "Citizens have the right to vote." },
        { simplified: "民主是很重要的制度。", pinyin: "Mínzhǔ shì hěn zhòngyào de zhìdù.", english: "Democracy is a very important system." },
        { simplified: "我们享有言论自由。", pinyin: "Wǒmen xiǎngyǒu yánlùn zìyóu.", english: "We enjoy freedom of speech." },
        { simplified: "保护环境是每个人的义务。", pinyin: "Bǎohù huánjìng shì měi gè rén de yìwù.", english: "Protecting the environment is everyone's duty." },
        { simplified: "审判将在下周开始。", pinyin: "Shěnpàn jiāng zài xià zhōu kāishǐ.", english: "The trial will begin next week." },
        { simplified: "犯罪率在这个城市很低。", pinyin: "Fànjīn lǜ zài zhège chéngshì hěn dī.", english: "The crime rate is very low in this city." },
        { simplified: "学校有很多安全规定。", pinyin: "Xuéxiào yǒu hěn duō ānquán guīdìng.", english: "Schools have many safety regulations." },
        { simplified: "新政策下个月开始实行。", pinyin: "Xīn zhèngcè xià gè yuè kāishǐ shíxíng.", english: "The new policy will be implemented next month." },
        { simplified: "政府办公室在市中心。", pinyin: "Zhèngfǔ bàngōngshì zài shì zhōngxīn.", english: "The government office is in the city center." },
        { simplified: "他们正在讨论重要的决定。", pinyin: "Tāmen zhèngzài tǎolùn zhòngyào de juédìng.", english: "They are discussing an important decision." },
        { simplified: "每个公民都应该遵守法律。", pinyin: "Měi gè gōngmín dōu yīnggāi zūnshǒu fǎlǜ.", english: "Every citizen should obey the law." },
        { simplified: "警察局提供24小时服务。", pinyin: "Jǐngchá jú tígōng èrshísì xiǎoshí fúwù.", english: "The police station provides 24-hour service." },
        { simplified: "法院的审判是公开的。", pinyin: "Fǎyuàn de shěnpàn shì gōngkāi de.", english: "Court trials are open to the public." },
        { simplified: "律师必须为客户保密。", pinyin: "Lǜshī bìxū wèi kèhù bǎomì.", english: "Lawyers must keep client confidentiality." },
        { simplified: "市长每月举行公开会议。", pinyin: "Shìzhǎng měi yuè jǔxíng gōngkāi huìyì.", english: "The mayor holds public meetings every month." },
        { simplified: "选举结果将在晚上公布。", pinyin: "Xuǎnjǔ jiéguǒ jiāng zài wǎnshàng gōngbù.", english: "Election results will be announced in the evening." },
        { simplified: "保护人民权利是政府的责任。", pinyin: "Bǎohù rénmín quánlì shì zhèngfǔ de zérèn.", english: "Protecting people's rights is the government's responsibility." },
        { simplified: "这个决定需要更多讨论。", pinyin: "Zhège juédìng xūyào gèng duō tǎolùn.", english: "This decision needs more discussion." },
        { simplified: "所有公民在法律面前都是平等的。", pinyin: "Suǒyǒu gōngmín zài fǎlǜ miànqián dōu shì píngděng de.", english: "All citizens are equal before the law." },
        { simplified: "政府正在制定新的安全政策。", pinyin: "Zhèngfǔ zhèngzài zhìdìng xīn de ānquán zhèngcè.", english: "The government is formulating new security policies." },
        { simplified: "公民有参与政治的自由。", pinyin: "Gōngmín yǒu cānyù zhèngzhì de zìyóu.", english: "Citizens have the freedom to participate in politics." },
        { simplified: "遵守法律规定是每个人的义务。", pinyin: "Zūnshǒu fǎlǜ guīdìng shì měi gè rén de yìwù.", english: "Following legal regulations is everyone's obligation." }
    ]
},
    
    26: {
    title: "Science and Technology",
    vocabulary: [
        { pinyin: "kēxué", simplified: "科学", traditional: "科學", english: "science" },
        { pinyin: "jìshù", simplified: "技术", traditional: "技術", english: "technology/technique" },
        { pinyin: "diànnǎo", simplified: "电脑", traditional: "電腦", english: "computer" },
        { pinyin: "wǎngluò", simplified: "网络", traditional: "網絡", english: "network/internet" },
        { pinyin: "shǒujī", simplified: "手机", traditional: "手機", english: "mobile phone/cellphone" },
        { pinyin: "ruǎnjiàn", simplified: "软件", traditional: "軟件", english: "software" },
        { pinyin: "yìngjiàn", simplified: "硬件", traditional: "硬件", english: "hardware" },
        { pinyin: "shùjù", simplified: "数据", traditional: "數據", english: "data" },
        { pinyin: "xìnxī", simplified: "信息", traditional: "信息", english: "information" },
        { pinyin: "yánjiū", simplified: "研究", traditional: "研究", english: "research/to research" },
        { pinyin: "fāmíng", simplified: "发明", traditional: "發明", english: "invention/to invent" },
        { pinyin: "fāxiàn", simplified: "发现", traditional: "發現", english: "discovery/to discover" },
        { pinyin: "shíyàn", simplified: "实验", traditional: "實驗", english: "experiment" },
        { pinyin: "jīqì", simplified: "机器", traditional: "機器", english: "machine" },
        { pinyin: "jīqìrén", simplified: "机器人", traditional: "機器人", english: "robot" },
        { pinyin: "diànzǐ", simplified: "电子", traditional: "電子", english: "electronic" },
        { pinyin: "diànqì", simplified: "电器", traditional: "電器", english: "electrical appliance" },
        { pinyin: "néngliàng", simplified: "能量", traditional: "能量", english: "energy" },
        { pinyin: "tàiyáng néng", simplified: "太阳能", traditional: "太陽能", english: "solar energy" },
        { pinyin: "huánjìng", simplified: "环境", traditional: "環境", english: "environment" },
        { pinyin: "wēixiǎn", simplified: "危险", traditional: "危險", english: "dangerous" },
        { pinyin: "ānquán", simplified: "安全", traditional: "安全", english: "safe/safety" },
        { pinyin: "xiàoguǒ", simplified: "效果", traditional: "效果", english: "effect/result" },
        { pinyin: "yǐngxiǎng", simplified: "影响", traditional: "影響", english: "influence/to influence" },
        { pinyin: "jìnbù", simplified: "进步", traditional: "進步", english: "progress/to progress" },
        { pinyin: "fāzhǎn", simplified: "发展", traditional: "發展", english: "development/to develop" },
        { pinyin: "gǎibiàn", simplified: "改变", traditional: "改變", english: "change/to change" },
        { pinyin: "tígāo", simplified: "提高", traditional: "提高", english: "improve/to improve" },
        { pinyin: "chuàngxīn", simplified: "创新", traditional: "創新", english: "innovation/to innovate" }
    ],
    sentences: [
        { simplified: "科学技术发展很快。", pinyin: "Kēxué jìshù fāzhǎn hěn kuài.", english: "Science and technology are developing very rapidly." },
        { simplified: "我每天用电脑工作。", pinyin: "Wǒ měitiān yòng diànnǎo gōngzuò.", english: "I use a computer to work every day." },
        { simplified: "现在网络很方便。", pinyin: "Xiànzài wǎngluò hěn fāngbiàn.", english: "The internet is very convenient now." },
        { simplified: "他的手机是新买的。", pinyin: "Tā de shǒujī shì xīn mǎi de.", english: "His mobile phone is newly bought." },
        { simplified: "这个软件很好用。", pinyin: "Zhège ruǎnjiàn hěn hǎoyòng.", english: "This software is very easy to use." },
        { simplified: "电脑硬件需要更新。", pinyin: "Diànnǎo yìngjiàn xūyào gēngxīn.", english: "The computer hardware needs to be updated." },
        { simplified: "我们需要收集更多数据。", pinyin: "Wǒmen xūyào shōují gèng duō shùjù.", english: "We need to collect more data." },
        { simplified: "这些信息很重要。", pinyin: "Zhèxie xìnxī hěn zhòngyào.", english: "This information is very important." },
        { simplified: "科学家正在研究新药。", pinyin: "Kēxuéjiā zhèngzài yánjiū xīn yào.", english: "Scientists are researching new medicine." },
        { simplified: "谁发明了电话？", pinyin: "Shéi fāmíng le diànhuà?", english: "Who invented the telephone?" },
        { simplified: "他们发现了新的星球。", pinyin: "Tāmen fāxiàn le xīn de xīngqiú.", english: "They discovered a new planet." },
        { simplified: "学生们在做化学实验。", pinyin: "Xuéshēngmen zài zuò huàxué shíyàn.", english: "The students are doing a chemistry experiment." },
        { simplified: "这台机器工作得很好。", pinyin: "Zhè tái jīqì gōngzuò de hěn hǎo.", english: "This machine works very well." },
        { simplified: "未来机器人会帮助人类。", pinyin: "Wèilái jīqìrén huì bāngzhù rénlèi.", english: "In the future, robots will help humans." },
        { simplified: "电子产品越来越便宜。", pinyin: "Diànzǐ chǎnpǐn yuè lái yuè piányi.", english: "Electronic products are getting cheaper and cheaper." },
        { simplified: "家里有很多电器。", pinyin: "Jiālǐ yǒu hěn duō diànqì.", english: "There are many electrical appliances at home." },
        { simplified: "太阳能是清洁能量。", pinyin: "Tàiyáng néng shì qīngjié néngliàng.", english: "Solar energy is clean energy." },
        { simplified: "我们要保护环境。", pinyin: "Wǒmen yào bǎohù huánjìng.", english: "We need to protect the environment." },
        { simplified: "这个实验很危险。", pinyin: "Zhège shíyàn hěn wēixiǎn.", english: "This experiment is very dangerous." },
        { simplified: "网络安全很重要。", pinyin: "Wǎngluò ānquán hěn zhòngyào.", english: "Network security is very important." },
        { simplified: "新技术效果很好。", pinyin: "Xīn jìshù xiàoguǒ hěn hǎo.", english: "The new technology has good effects." },
        { simplified: "科技影响了我们的生活。", pinyin: "Kējì yǐngxiǎng le wǒmen de shēnghuó.", english: "Technology has influenced our lives." },
        { simplified: "人类的科学在不断进步。", pinyin: "Rénlèi de kēxué zài bùduàn jìnbù.", english: "Human science is constantly progressing." },
        { simplified: "中国的科技发展很快。", pinyin: "Zhōngguó de kējì fāzhǎn hěn kuài.", english: "China's technological development is very fast." },
        { simplified: "新发明改变了世界。", pinyin: "Xīn fāmíng gǎibiàn le shìjiè.", english: "New inventions have changed the world." },
        { simplified: "教育可以提高科学水平。", pinyin: "Jiàoyù kěyǐ tígāo kēxué shuǐpíng.", english: "Education can improve the scientific level." },
        { simplified: "公司需要更多创新。", pinyin: "Gōngsī xūyào gèng duō chuàngxīn.", english: "The company needs more innovation." },
        { simplified: "科学研究需要很多时间。", pinyin: "Kēxué yánjiū xūyào hěn duō shíjiān.", english: "Scientific research requires a lot of time." },
        { simplified: "这个机器人会说话。", pinyin: "Zhège jīqìrén huì shuōhuà.", english: "This robot can speak." },
        { simplified: "科学技术让生活更美好。", pinyin: "Kēxué jìshù ràng shēnghuó gèng měihǎo.", english: "Science and technology make life better." }
    ]
},
    
    27: {
    title: "History and Tradition",
    vocabulary: [
        { pinyin: "lìshǐ", simplified: "历史", traditional: "歷史", english: "history" },
        { pinyin: "chuántǒng", simplified: "传统", traditional: "傳統", english: "tradition" },
        { pinyin: "wénhuà", simplified: "文化", traditional: "文化", english: "culture" },
        { pinyin: "gǔdài", simplified: "古代", traditional: "古代", english: "ancient times" },
        { pinyin: "xiàndài", simplified: "现代", traditional: "現代", english: "modern times" },
        { pinyin: "huángdì", simplified: "皇帝", traditional: "皇帝", english: "emperor" },
        { pinyin: "wángcháo", simplified: "王朝", traditional: "王朝", english: "dynasty" },
        { pinyin: "míngzú", simplified: "民族", traditional: "民族", english: "ethnic group/nation" },
        { pinyin: "zǔxiān", simplified: "祖先", traditional: "祖先", english: "ancestor" },
        { pinyin: "jiéqìng", simplified: "节庆", traditional: "節慶", english: "festival/celebration" },
        { pinyin: "xíguàn", simplified: "习惯", traditional: "習慣", english: "habit/custom" },
        { pinyin: "lǐmào", simplified: "礼貌", traditional: "禮貌", english: "politeness/courtesy" },
        { pinyin: "jìniàn", simplified: "纪念", traditional: "紀念", english: "commemorate/memorial" },
        { pinyin: "miàosù", simplified: "庙宇", traditional: "廟宇", english: "temple" },
        { pinyin: "gōngdiàn", simplified: "宫殿", traditional: "宮殿", english: "palace" },
        { pinyin: "gǔjì", simplified: "古迹", traditional: "古蹟", english: "historical site" },
        { pinyin: "wénwù", simplified: "文物", traditional: "文物", english: "cultural relic" },
        { pinyin: "cáifù", simplified: "财富", traditional: "財富", english: "wealth/treasure" },
        { pinyin: "zhìhuì", simplified: "智慧", traditional: "智慧", english: "wisdom" },
        { pinyin: "jīngyàn", simplified: "经验", traditional: "經驗", english: "experience" },
        { pinyin: "gùshì", simplified: "故事", traditional: "故事", english: "story" },
        { pinyin: "chuánshuō", simplified: "传说", traditional: "傳說", english: "legend" },
        { pinyin: "shénhuà", simplified: "神话", traditional: "神話", english: "myth/mythology" },
        { pinyin: "yīngxióng", simplified: "英雄", traditional: "英雄", english: "hero" },
        { pinyin: "zhànzhēng", simplified: "战争", traditional: "戰爭", english: "war" },
        { pinyin: "hépíng", simplified: "和平", traditional: "和平", english: "peace" },
        { pinyin: "fāzhǎn", simplified: "发展", traditional: "發展", english: "development" },
        { pinyin: "jìnbù", simplified: "进步", traditional: "進步", english: "progress" },
        { pinyin: "biànhuà", simplified: "变化", traditional: "變化", english: "change" },
        { pinyin: "yǐngxiǎng", simplified: "影响", traditional: "影響", english: "influence" },
        { pinyin: "zūnzhòng", simplified: "尊重", traditional: "尊重", english: "respect" },
        { pinyin: "bǎohù", simplified: "保护", traditional: "保護", english: "protect" },
        { pinyin: "jìchéng", simplified: "继承", traditional: "繼承", english: "inherit" },
        { pinyin: "chuánchéng", simplified: "传承", traditional: "傳承", english: "pass down/heritage" }
    ],
    sentences: [
        { simplified: "中国有五千年的历史。", pinyin: "Zhōngguó yǒu wǔqiān nián de lìshǐ.", english: "China has 5,000 years of history." },
        { simplified: "我们要保护传统文化。", pinyin: "Wǒmen yào bǎohù chuántǒng wénhuà.", english: "We should protect traditional culture." },
        { simplified: "这个习惯从古代传到现在。", pinyin: "Zhège xíguàn cóng gǔdài chuán dào xiànzài.", english: "This custom has been passed down from ancient times to now." },
        { simplified: "皇帝住在美丽的宫殿里。", pinyin: "Huángdì zhù zài měilì de gōngdiàn lǐ.", english: "The emperor lived in a beautiful palace." },
        { simplified: "每个王朝都有自己的特点。", pinyin: "Měi gè wángcháo dōu yǒu zìjǐ de tèdiǎn.", english: "Every dynasty has its own characteristics." },
        { simplified: "我们要尊重祖先的智慧。", pinyin: "Wǒmen yào zūnzhòng zǔxiān de zhìhuì.", english: "We should respect our ancestors' wisdom." },
        { simplified: "春节是最重要的传统节庆。", pinyin: "Chūnjié shì zuì zhòngyào de chuántǒng jiéqìng.", english: "Spring Festival is the most important traditional celebration." },
        { simplified: "年轻人应该学习传统礼貌。", pinyin: "Niánqīng rén yīnggāi xuéxí chuántǒng lǐmào.", english: "Young people should learn traditional courtesy." },
        { simplified: "这座庙宇有一千年历史。", pinyin: "Zhè zuò miàosù yǒu yīqiān nián lìshǐ.", english: "This temple has 1,000 years of history." },
        { simplified: "博物馆里有很多珍贵文物。", pinyin: "Bówùguǎn lǐ yǒu hěn duō zhēnguì wénwù.", english: "There are many precious cultural relics in the museum." },
        { simplified: "我们去参观了著名的古迹。", pinyin: "Wǒmen qù cānguān le zhùmíng de gǔjì.", english: "We went to visit the famous historical site." },
        { simplified: "爷爷给我讲古代的故事。", pinyin: "Yéye gěi wǒ jiǎng gǔdài de gùshì.", english: "Grandpa tells me stories from ancient times." },
        { simplified: "这个传说很有意思。", pinyin: "Zhège chuánshuō hěn yǒu yìsi.", english: "This legend is very interesting." },
        { simplified: "中国神话有很多神奇的内容。", pinyin: "Zhōngguó shénhuà yǒu hěn duō shénqí de nèiróng.", english: "Chinese mythology has many magical contents." },
        { simplified: "历史上有很多伟大的英雄。", pinyin: "Lìshǐ shàng yǒu hěn duō wěidà de yīngxióng.", english: "There were many great heroes in history." },
        { simplified: "战争给人民带来痛苦。", pinyin: "Zhànzhēng gěi rénmín dàilái tòngkǔ.", english: "War brings suffering to the people." },
        { simplified: "我们都希望世界和平。", pinyin: "Wǒmen dōu xīwàng shìjiè hépíng.", english: "We all hope for world peace." },
        { simplified: "社会在不断发展进步。", pinyin: "Shèhuì zài bùduàn fāzhǎn jìnbù.", english: "Society is constantly developing and progressing." },
        { simplified: "时代的变化很快。", pinyin: "Shídài de biànhuà hěn kuài.", english: "The changes of the times are very fast." },
        { simplified: "历史对现在有很大影响。", pinyin: "Lìshǐ duì xiànzài yǒu hěn dà yǐngxiǎng.", english: "History has a great influence on the present." },
        { simplified: "每个民族都有自己的文化。", pinyin: "Měi gè mínzú dōu yǒu zìjǐ de wénhuà.", english: "Every ethnic group has its own culture." },
        { simplified: "我们应该从历史中学习经验。", pinyin: "Wǒmen yīnggāi cóng lìshǐ zhōng xuéxí jīngyàn.", english: "We should learn experience from history." },
        { simplified: "传统节日有特殊的意义。", pinyin: "Chuántǒng jiérì yǒu tèshū de yìyì.", english: "Traditional festivals have special meaning." },
        { simplified: "这些珍贵的文物是民族的财富。", pinyin: "Zhèxiē zhēnguì de wénwù shì mínzú de cáifù.", english: "These precious cultural relics are the nation's treasure." },
        { simplified: "我们要纪念历史上的重要人物。", pinyin: "Wǒmen yào jìniàn lìshǐ shàng de zhòngyào rénwù.", english: "We should commemorate important historical figures." },
        { simplified: "年轻一代要继承传统文化。", pinyin: "Niánqīng yīdài yào jìchéng chuántǒng wénhuà.", english: "The younger generation should inherit traditional culture." },
        { simplified: "文化的传承需要每个人的努力。", pinyin: "Wénhuà de chuánchéng xūyào měi gè rén de nǔlì.", english: "Cultural heritage requires everyone's effort." },
        { simplified: "古代和现代有很大的不同。", pinyin: "Gǔdài hé xiàndài yǒu hěn dà de bùtóng.", english: "Ancient times and modern times are very different." },
        { simplified: "我们要保护历史建筑。", pinyin: "Wǒmen yào bǎohù lìshǐ jiànzhù.", english: "We should protect historical buildings." },
        { simplified: "传统文化是我们的根。", pinyin: "Chuántǒng wénhuà shì wǒmen de gēn.", english: "Traditional culture is our root." }
    ]
},
    
    28: {
    title: "Communication and Language",
    vocabulary: [
        { pinyin: "shuōhuà", simplified: "说话", traditional: "說話", english: "to speak/talk" },
        { pinyin: "tánhuà", simplified: "谈话", traditional: "談話", english: "conversation/talk" },
        { pinyin: "jiāoliú", simplified: "交流", traditional: "交流", english: "communication/exchange" },
        { pinyin: "biǎodá", simplified: "表达", traditional: "表達", english: "to express" },
        { pinyin: "jiěshì", simplified: "解释", traditional: "解釋", english: "to explain" },
        { pinyin: "fānyì", simplified: "翻译", traditional: "翻譯", english: "to translate/translation" },
        { pinyin: "yǔyán", simplified: "语言", traditional: "語言", english: "language" },
        { pinyin: "hànyǔ", simplified: "汉语", traditional: "漢語", english: "Chinese language" },
        { pinyin: "yīngyǔ", simplified: "英语", traditional: "英語", english: "English language" },
        { pinyin: "fāyīn", simplified: "发音", traditional: "發音", english: "pronunciation" },
        { pinyin: "shēngdiào", simplified: "声调", traditional: "聲調", english: "tone" },
        { pinyin: "cíhuì", simplified: "词汇", traditional: "詞彙", english: "vocabulary" },
        { pinyin: "yǔfǎ", simplified: "语法", traditional: "語法", english: "grammar" },
        { pinyin: "jùzi", simplified: "句子", traditional: "句子", english: "sentence" },
        { pinyin: "duìhuà", simplified: "对话", traditional: "對話", english: "dialogue" },
        { pinyin: "tǎolùn", simplified: "讨论", traditional: "討論", english: "to discuss" },
        { pinyin: "jiàngyì", simplified: "建议", traditional: "建議", english: "suggestion/to suggest" },
        { pinyin: "yìjiàn", simplified: "意见", traditional: "意見", english: "opinion" },
        { pinyin: "tóngyì", simplified: "同意", traditional: "同意", english: "to agree" },
        { pinyin: "fǎnduì", simplified: "反对", traditional: "反對", english: "to oppose/object" },
        { pinyin: "wènhǎo", simplified: "问好", traditional: "問好", english: "to greet/say hello" },
        { pinyin: "gàobié", simplified: "告别", traditional: "告別", english: "to say goodbye" },
        { pinyin: "dǎzhāohu", simplified: "打招呼", traditional: "打招呼", english: "to greet" },
        { pinyin: "lǐmào", simplified: "礼貌", traditional: "禮貌", english: "politeness/polite" },
        { pinyin: "kèqi", simplified: "客气", traditional: "客氣", english: "polite/courteous" }
    ],
    sentences: [
        { simplified: "我们用中文说话。", pinyin: "Wǒmen yòng zhōngwén shuōhuà.", english: "We speak in Chinese." },
        { simplified: "老师和学生在谈话。", pinyin: "Lǎoshī hé xuéshēng zài tánhuà.", english: "The teacher and student are having a conversation." },
        { simplified: "我喜欢和朋友交流。", pinyin: "Wǒ xǐhuān hé péngyǒu jiāoliú.", english: "I like to communicate with friends." },
        { simplified: "她很会表达自己的想法。", pinyin: "Tā hěn huì biǎodá zìjǐ de xiǎngfǎ.", english: "She is very good at expressing her thoughts." },
        { simplified: "老师给我们解释这个问题。", pinyin: "Lǎoshī gěi wǒmen jiěshì zhège wèntí.", english: "The teacher explains this problem to us." },
        { simplified: "我需要翻译这篇文章。", pinyin: "Wǒ xūyào fānyì zhè piān wénzhāng.", english: "I need to translate this article." },
        { simplified: "汉语是一门很有趣的语言。", pinyin: "Hànyǔ shì yī mén hěn yǒuqù de yǔyán.", english: "Chinese is a very interesting language." },
        { simplified: "他在学习英语。", pinyin: "Tā zài xuéxí yīngyǔ.", english: "He is learning English." },
        { simplified: "我的发音还不够好。", pinyin: "Wǒ de fāyīn hái bù gòu hǎo.", english: "My pronunciation is still not good enough." },
        { simplified: "中文有四个声调。", pinyin: "Zhōngwén yǒu sì gè shēngdiào.", english: "Chinese has four tones." },
        { simplified: "学习新词汇很重要。", pinyin: "Xuéxí xīn cíhuì hěn zhòngyào.", english: "Learning new vocabulary is very important." },
        { simplified: "语法比较难学。", pinyin: "Yǔfǎ bǐjiào nán xué.", english: "Grammar is relatively difficult to learn." },
        { simplified: "这个句子太长了。", pinyin: "Zhège jùzi tài cháng le.", english: "This sentence is too long." },
        { simplified: "我们练习对话。", pinyin: "Wǒmen liànxí duìhuà.", english: "We practice dialogue." },
        { simplified: "大家一起讨论这个话题。", pinyin: "Dàjiā yīqǐ tǎolùn zhège huàtí.", english: "Everyone discusses this topic together." },
        { simplified: "我给你一个建议。", pinyin: "Wǒ gěi nǐ yī gè jiànyì.", english: "I'll give you a suggestion." },
        { simplified: "你有什么意见？", pinyin: "Nǐ yǒu shénme yìjiàn?", english: "What's your opinion?" },
        { simplified: "我同意你的看法。", pinyin: "Wǒ tóngyì nǐ de kànfǎ.", english: "I agree with your view." },
        { simplified: "他反对这个计划。", pinyin: "Tā fǎnduì zhège jìhuà.", english: "He opposes this plan." },
        { simplified: "见面时要问好。", pinyin: "Jiànmiàn shí yào wènhǎo.", english: "You should greet when meeting." },
        { simplified: "离开时别忘了告别。", pinyin: "Líkāi shí bié wàng le gàobié.", english: "Don't forget to say goodbye when leaving." },
        { simplified: "我和邻居打招呼。", pinyin: "Wǒ hé línjū dǎzhāohu.", english: "I greet my neighbors." },
        { simplified: "说话要有礼貌。", pinyin: "Shuōhuà yào yǒu lǐmào.", english: "Speaking should be polite." },
        { simplified: "他是一个很客气的人。", pinyin: "Tā shì yī gè hěn kèqi de rén.", english: "He is a very polite person." },
        { simplified: "语言交流很有意思。", pinyin: "Yǔyán jiāoliú hěn yǒu yìsi.", english: "Language communication is very interesting." },
        { simplified: "我们要多练习说话。", pinyin: "Wǒmen yào duō liànxí shuōhuà.", english: "We should practice speaking more." },
        { simplified: "这个词汇很难记住。", pinyin: "Zhège cíhuì hěn nán jìzhù.", english: "This vocabulary is hard to remember." },
        { simplified: "翻译工作需要耐心。", pinyin: "Fānyì gōngzuò xūyào nàixīn.", english: "Translation work requires patience." },
        { simplified: "良好的交流很重要。", pinyin: "Liánghǎo de jiāoliú hěn zhòngyào.", english: "Good communication is very important." },
        { simplified: "每种语言都有自己的特点。", pinyin: "Měi zhǒng yǔyán dōu yǒu zìjǐ de tèdiǎn.", english: "Every language has its own characteristics." }
    ]
},
    
    29: {
    title: "Social Relationships",
    vocabulary: [
        { pinyin: "péngyǒu", simplified: "朋友", traditional: "朋友", english: "friend" },
        { pinyin: "tóngxué", simplified: "同学", traditional: "同學", english: "classmate" },
        { pinyin: "tóngshì", simplified: "同事", traditional: "同事", english: "colleague" },
        { pinyin: "línjū", simplified: "邻居", traditional: "鄰居", english: "neighbor" },
        { pinyin: "kèrén", simplified: "客人", traditional: "客人", english: "guest" },
        { pinyin: "zhǔrén", simplified: "主人", traditional: "主人", english: "host" },
        { pinyin: "lǎobǎn", simplified: "老板", traditional: "老闆", english: "boss" },
        { pinyin: "yuángōng", simplified: "员工", traditional: "員工", english: "employee" },
        { pinyin: "lǎoshī", simplified: "老师", traditional: "老師", english: "teacher" },
        { pinyin: "xuéshēng", simplified: "学生", traditional: "學生", english: "student" },
        { pinyin: "yīshēng", simplified: "医生", traditional: "醫生", english: "doctor" },
        { pinyin: "hùshi", simplified: "护士", traditional: "護士", english: "nurse" },
        { pinyin: "jǐngchá", simplified: "警察", traditional: "警察", english: "police officer" },
        { pinyin: "sījī", simplified: "司机", traditional: "司機", english: "driver" },
        { pinyin: "fúwùyuán", simplified: "服务员", traditional: "服務員", english: "waiter/waitress" },
        { pinyin: "gùkè", simplified: "顾客", traditional: "顧客", english: "customer" },
        { pinyin: "mòshēngrén", simplified: "陌生人", traditional: "陌生人", english: "stranger" },
        { pinyin: "qīnqi", simplified: "亲戚", traditional: "親戚", english: "relative" },
        { pinyin: "jiérì", simplified: "节日", traditional: "節日", english: "holiday/festival" },
        { pinyin: "jùhuì", simplified: "聚会", traditional: "聚會", english: "gathering/party" },
        { pinyin: "yāoqǐng", simplified: "邀请", traditional: "邀請", english: "invite" },
        { pinyin: "bàngzhù", simplified: "帮助", traditional: "幫助", english: "help" },
        { pinyin: "guānxīn", simplified: "关心", traditional: "關心", english: "care about" },
        { pinyin: "lǐjiě", simplified: "理解", traditional: "理解", english: "understand" },
        { pinyin: "xìnrèn", simplified: "信任", traditional: "信任", english: "trust" },
        { pinyin: "zūnjìng", simplified: "尊敬", traditional: "尊敬", english: "respect" },
        { pinyin: "gǎnxiè", simplified: "感谢", traditional: "感謝", english: "thank" },
        { pinyin: "dàoqiàn", simplified: "道歉", traditional: "道歉", english: "apologize" },
        { pinyin: "yuánliàng", simplified: "原谅", traditional: "原諒", english: "forgive" }
    ],
    sentences: [
        { simplified: "他是我最好的朋友。", pinyin: "Tā shì wǒ zuì hǎo de péngyǒu.", english: "He is my best friend." },
        { simplified: "我们是大学同学。", pinyin: "Wǒmen shì dàxué tóngxué.", english: "We are university classmates." },
        { simplified: "我的同事都很友好。", pinyin: "Wǒ de tóngshì dōu hěn yǒuhǎo.", english: "My colleagues are all very friendly." },
        { simplified: "邻居昨天搬走了。", pinyin: "Línjū zuótiān bān zǒu le.", english: "The neighbor moved away yesterday." },
        { simplified: "今天有客人来我家。", pinyin: "Jīntiān yǒu kèrén lái wǒ jiā.", english: "Guests are coming to my house today." },
        { simplified: "主人很热情地招待我们。", pinyin: "Zhǔrén hěn rèqíng de zhāodài wǒmen.", english: "The host received us very warmly." },
        { simplified: "老板对员工很严格。", pinyin: "Lǎobǎn duì yuángōng hěn yángé.", english: "The boss is very strict with employees." },
        { simplified: "公司有一百多个员工。", pinyin: "Gōngsī yǒu yī bǎi duō gè yuángōng.", english: "The company has over one hundred employees." },
        { simplified: "老师正在给学生上课。", pinyin: "Lǎoshī zhèngzài gěi xuéshēng shàngkè.", english: "The teacher is giving a lesson to students." },
        { simplified: "学生们都很尊敬这位老师。", pinyin: "Xuéshēngmen dōu hěn zūnjìng zhè wèi lǎoshī.", english: "The students all respect this teacher very much." },
        { simplified: "医生建议病人多休息。", pinyin: "Yīshēng jiànyì bìngrén duō xiūxí.", english: "The doctor advises the patient to rest more." },
        { simplified: "护士每天都很辛苦。", pinyin: "Hùshi měitiān dōu hěn xīnkǔ.", english: "Nurses work very hard every day." },
        { simplified: "警察正在查车。", pinyin: "Jǐngchá zhèngzài chá chē.", english: "The police are checking vehicles." },
        { simplified: "司机开车很小心。", pinyin: "Sījī kāichē hěn xiǎoxīn.", english: "The driver drives very carefully." },
        { simplified: "服务员的态度很好。", pinyin: "Fúwùyuán de tàidù hěn hǎo.", english: "The waiter's attitude is very good." },
        { simplified: "顾客对服务很满意。", pinyin: "Gùkè duì fúwù hěn mǎnyì.", english: "The customer is very satisfied with the service." },
        { simplified: "不要和陌生人说话。", pinyin: "Bùyào hé mòshēngrén shuōhuà.", english: "Don't talk to strangers." },
        { simplified: "春节时亲戚都会来聚会。", pinyin: "Chūnjié shí qīnqi dōu huì lái jùhuì.", english: "Relatives all come for gatherings during Spring Festival." },
        { simplified: "中秋节是中国的传统节日。", pinyin: "Zhōngqiūjié shì Zhōngguó de chuántǒng jiérì.", english: "Mid-Autumn Festival is a traditional Chinese holiday." },
        { simplified: "我们下周六举办生日聚会。", pinyin: "Wǒmen xià zhōuliù jǔbàn shēngrì jùhuì.", english: "We're having a birthday party next Saturday." },
        { simplified: "她邀请我参加婚礼。", pinyin: "Tā yāoqǐng wǒ cānjiā hūnlǐ.", english: "She invited me to attend the wedding." },
        { simplified: "谢谢你帮助我学习中文。", pinyin: "Xièxie nǐ bàngzhù wǒ xuéxí Zhōngwén.", english: "Thank you for helping me learn Chinese." },
        { simplified: "父母总是关心孩子的健康。", pinyin: "Fùmǔ zǒngshì guānxīn háizi de jiànkāng.", english: "Parents always care about their children's health." },
        { simplified: "我很理解你的想法。", pinyin: "Wǒ hěn lǐjiě nǐ de xiǎngfǎ.", english: "I understand your thoughts very well." },
        { simplified: "朋友之间要相互信任。", pinyin: "Péngyǒu zhījiān yào xiānghù xìnrèn.", english: "Friends should trust each other." },
        { simplified: "我们应该尊敬老人。", pinyin: "Wǒmen yīnggāi zūnjìng lǎorén.", english: "We should respect the elderly." },
        { simplified: "我要感谢所有帮助过我的人。", pinyin: "Wǒ yào gǎnxiè suǒyǒu bàngzhù guò wǒ de rén.", english: "I want to thank everyone who has helped me." },
        { simplified: "他为自己的错误道歉了。", pinyin: "Tā wèi zìjǐ de cuòwù dàoqiàn le.", english: "He apologized for his mistake." },
        { simplified: "请原谅我来晚了。", pinyin: "Qǐng yuánliàng wǒ lái wǎn le.", english: "Please forgive me for being late." },
        { simplified: "良好的人际关系很重要。", pinyin: "Liánghǎo de rénjì guānxì hěn zhòngyào.", english: "Good interpersonal relationships are very important." }
    ]
},
    
    30: {
    title: "Review and Integration",
    vocabulary: [
        { pinyin: "fùxí", simplified: "复习", traditional: "復習", english: "review/revise" },
        { pinyin: "zhěnglǐ", simplified: "整理", traditional: "整理", english: "organize/tidy up" },
        { pinyin: "zǒngjié", simplified: "总结", traditional: "總結", english: "summarize/conclude" },
        { pinyin: "jìyì", simplified: "记忆", traditional: "記憶", english: "memory/remember" },
        { pinyin: "lǐjiě", simplified: "理解", traditional: "理解", english: "understand/comprehend" },
        { pinyin: "zhǎngwò", simplified: "掌握", traditional: "掌握", english: "master/grasp" },
        { pinyin: "yùnyòng", simplified: "运用", traditional: "運用", english: "apply/use" },
        { pinyin: "tígāo", simplified: "提高", traditional: "提高", english: "improve/enhance" },
        { pinyin: "jìnbù", simplified: "进步", traditional: "進步", english: "progress/improve" },
        { pinyin: "chénggōng", simplified: "成功", traditional: "成功", english: "success/succeed" },
        { pinyin: "nǔlì", simplified: "努力", traditional: "努力", english: "effort/work hard" },
        { pinyin: "jiānchí", simplified: "坚持", traditional: "堅持", english: "persist/stick to" },
        { pinyin: "mùbiāo", simplified: "目标", traditional: "目標", english: "goal/target" },
        { pinyin: "jìhuà", simplified: "计划", traditional: "計劃", english: "plan/planning" },
        { pinyin: "fāngfǎ", simplified: "方法", traditional: "方法", english: "method/way" },
        { pinyin: "jīngyàn", simplified: "经验", traditional: "經驗", english: "experience" },
        { pinyin: "zhīshi", simplified: "知识", traditional: "知識", english: "knowledge" },
        { pinyin: "nénglì", simplified: "能力", traditional: "能力", english: "ability/capability" },
        { pinyin: "shuǐpíng", simplified: "水平", traditional: "水平", english: "level/standard" },
        { pinyin: "jiéguǒ", simplified: "结果", traditional: "結果", english: "result/outcome" },
        { pinyin: "xiàoguǒ", simplified: "效果", traditional: "效果", english: "effect/effectiveness" },
        { pinyin: "yǐngxiǎng", simplified: "影响", traditional: "影響", english: "influence/impact" },
        { pinyin: "zhòngyào", simplified: "重要", traditional: "重要", english: "important" },
        { pinyin: "bìyào", simplified: "必要", traditional: "必要", english: "necessary" },
        { pinyin: "yǒuyòng", simplified: "有用", traditional: "有用", english: "useful" },
        { pinyin: "kùnnán", simplified: "困难", traditional: "困難", english: "difficult/difficulty" },
        { pinyin: "jiǎndān", simplified: "简单", traditional: "簡單", english: "simple/easy" },
        { pinyin: "fùzá", simplified: "复杂", traditional: "複雜", english: "complex/complicated" },
        { pinyin: "qīngchǔ", simplified: "清楚", traditional: "清楚", english: "clear/distinct" },
        { pinyin: "míngbái", simplified: "明白", traditional: "明白", english: "understand/clear" }
    ],
    sentences: [
        { simplified: "今天我们复习以前学过的词汇。", pinyin: "Jīntiān wǒmen fùxí yǐqián xuéguò de cíhuì.", english: "Today we review the vocabulary we learned before." },
        { simplified: "我需要整理一下学习笔记。", pinyin: "Wǒ xūyào zhěnglǐ yīxià xuéxí bǐjì.", english: "I need to organize my study notes." },
        { simplified: "学完这本书后，我要总结一下重点。", pinyin: "Xuéwán zhè běn shū hòu, wǒ yào zǒngjié yīxià zhòngdiǎn.", english: "After finishing this book, I want to summarize the key points." },
        { simplified: "我的记忆力不太好，需要多复习。", pinyin: "Wǒ de jìyìlì bù tài hǎo, xūyào duō fùxí.", english: "My memory isn't very good, I need to review more." },
        { simplified: "理解语法比记单词更困难。", pinyin: "Lǐjiě yǔfǎ bǐ jì dāncí gèng kùnnán.", english: "Understanding grammar is more difficult than memorizing words." },
        { simplified: "他已经掌握了基本的汉语对话。", pinyin: "Tā yǐjīng zhǎngwò le jīběn de Hànyǔ duìhuà.", english: "He has already mastered basic Chinese conversation." },
        { simplified: "学语言要多运用，不能只看书。", pinyin: "Xué yǔyán yào duō yùnyòng, bù néng zhǐ kàn shū.", english: "Learning languages requires more practice, not just reading books." },
        { simplified: "我希望能提高自己的中文水平。", pinyin: "Wǒ xīwàng néng tígāo zìjǐ de Zhōngwén shuǐpíng.", english: "I hope to improve my Chinese level." },
        { simplified: "通过努力学习，我的成绩有了很大进步。", pinyin: "Tōngguò nǔlì xuéxí, wǒ de chéngjì yǒu le hěn dà jìnbù.", english: "Through hard work, my grades have made great progress." },
        { simplified: "成功需要时间和坚持。", pinyin: "Chénggōng xūyào shíjiān hé jiānchí.", english: "Success requires time and persistence." },
        { simplified: "只有努力才能实现自己的梦想。", pinyin: "Zhǐyǒu nǔlì cái néng shíxiàn zìjǐ de mèngxiǎng.", english: "Only through effort can one realize their dreams." },
        { simplified: "学习中文需要长期坚持。", pinyin: "Xuéxí Zhōngwén xūyào chángqī jiānchí.", english: "Learning Chinese requires long-term persistence." },
        { simplified: "我的目标是通过HSK三级考试。", pinyin: "Wǒ de mùbiāo shì tōngguò HSK sānjí kǎoshì.", english: "My goal is to pass the HSK Level 3 exam." },
        { simplified: "制定学习计划很重要。", pinyin: "Zhìdìng xuéxí jìhuà hěn zhòngyào.", english: "Making a study plan is very important." },
        { simplified: "每个人都有自己的学习方法。", pinyin: "Měi gè rén dōu yǒu zìjǐ de xuéxí fāngfǎ.", english: "Everyone has their own learning methods." },
        { simplified: "老师有丰富的教学经验。", pinyin: "Lǎoshī yǒu fēngfù de jiàoxué jīngyàn.", english: "The teacher has rich teaching experience." },
        { simplified: "知识就是力量，要不断学习。", pinyin: "Zhīshi jiùshì lìliàng, yào bùduàn xuéxí.", english: "Knowledge is power, one must keep learning." },
        { simplified: "他的语言能力很强。", pinyin: "Tā de yǔyán nénglì hěn qiáng.", english: "His language ability is very strong." },
        { simplified: "我现在的汉语水平还不够高。", pinyin: "Wǒ xiànzài de Hànyǔ shuǐpíng hái bù gòu gāo.", english: "My current Chinese level is still not high enough." },
        { simplified: "考试的结果比我预期的要好。", pinyin: "Kǎoshì de jiéguǒ bǐ wǒ yùqī de yào hǎo.", english: "The exam results were better than I expected." },
        { simplified: "这种学习方法效果很好。", pinyin: "Zhè zhǒng xuéxí fāngfǎ xiàoguǒ hěn hǎo.", english: "This learning method is very effective." },
        { simplified: "好的学习环境对学生有很大影响。", pinyin: "Hǎo de xuéxí huánjìng duì xuéshēng yǒu hěn dà yǐngxiǎng.", english: "A good learning environment has a great impact on students." },
        { simplified: "词汇是学习语言最重要的基础。", pinyin: "Cíhuì shì xuéxí yǔyán zuì zhòngyào de jīchǔ.", english: "Vocabulary is the most important foundation for learning languages." },
        { simplified: "多练习口语是很有必要的。", pinyin: "Duō liànxí kǒuyǔ shì hěn yǒu bìyào de.", english: "Practicing speaking more is very necessary." },
        { simplified: "这本词典对我很有用。", pinyin: "Zhè běn cídiǎn duì wǒ hěn yǒuyòng.", english: "This dictionary is very useful to me." },
        { simplified: "学习中文确实有些困难。", pinyin: "Xuéxí Zhōngwén quèshí yǒuxiē kùnnán.", english: "Learning Chinese is indeed somewhat difficult." },
        { simplified: "这个语法点看起来很简单。", pinyin: "Zhège yǔfǎ diǎn kàn qǐlái hěn jiǎndān.", english: "This grammar point looks very simple." },
        { simplified: "中文的语法比我想象的复杂。", pinyin: "Zhōngwén de yǔfǎ bǐ wǒ xiǎngxiàng de fùzá.", english: "Chinese grammar is more complex than I imagined." },
        { simplified: "老师解释得很清楚，我都明白了。", pinyin: "Lǎoshī jiěshì de hěn qīngchǔ, wǒ dōu míngbái le.", english: "The teacher explained very clearly, I understand everything." },
        { simplified: "三十天的学习让我对中文有了更深的理解。", pinyin: "Sānshí tiān de xuéxí ràng wǒ duì Zhōngwén yǒu le gèng shēn de lǐjiě.", english: "Thirty days of study has given me a deeper understanding of Chinese." }
    ]
}

};

// DOM Elements
const currentDayElement = document.getElementById('currentDay');
const dayTitleElement = document.getElementById('dayTitle');
const vocabCountElement = document.getElementById('vocabCount');
const sentenceCountElement = document.getElementById('sentenceCount');
const progressFillElement = document.getElementById('progressFill');
const prevDayBtn = document.getElementById('prevDay');
const nextDayBtn = document.getElementById('nextDay');
const vocabTableBody = document.getElementById('vocabTableBody');
const sentencesContainer = document.getElementById('sentencesContainer');
const downloadVocabBtn = document.getElementById('downloadVocab');
const downloadSentencesBtn = document.getElementById('downloadSentences');

// Tab elements
const tabs = document.querySelectorAll('.tab');
const tabPanels = document.querySelectorAll('.tab-panel');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    updateDisplay();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    prevDayBtn.addEventListener('click', () => changeDay(-1));
    nextDayBtn.addEventListener('click', () => changeDay(1));
    downloadVocabBtn.addEventListener('click', () => downloadCSV('vocabulary'));
    downloadSentencesBtn.addEventListener('click', () => downloadCSV('sentences'));
    
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
}

// Change day function
function changeDay(direction) {
    const newDay = currentDay + direction;
    if (newDay >= 1 && newDay <= 30) {
        currentDay = newDay;
        updateDisplay();
    }
}

// Update display for current day
function updateDisplay() {
    const dayData = lessonsData[currentDay];
    
    // Update day info
    currentDayElement.textContent = currentDay;
    dayTitleElement.textContent = `Day ${currentDay}: ${dayData.title}`;
    vocabCountElement.textContent = dayData.vocabulary.length;
    sentenceCountElement.textContent = dayData.sentences.length;
    
    // Update progress bar
    const progress = (currentDay / 30) * 100;
    progressFillElement.style.width = `${progress}%`;
    
    // Update navigation buttons
    prevDayBtn.disabled = currentDay === 1;
    nextDayBtn.disabled = currentDay === 30;
    
    // Update content
    updateVocabularyTable();
    updateSentences();
}

// Update vocabulary table
function updateVocabularyTable() {
    const dayData = lessonsData[currentDay];
    vocabTableBody.innerHTML = '';
    
    dayData.vocabulary.forEach((word, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="pinyin-text">${word.pinyin}</td>
            <td class="chinese-text">${word.simplified}</td>
            <td class="chinese-text">${word.traditional}</td>
            <td>${word.english}</td>
            
        `;
        vocabTableBody.appendChild(row);
    });
}

// Update sentences
function updateSentences() {
    const dayData = lessonsData[currentDay];
    sentencesContainer.innerHTML = '';
    
    dayData.sentences.forEach((sentence, index) => {
        const sentenceCard = document.createElement('div');
        sentenceCard.className = 'sentence-card';
        sentenceCard.innerHTML = `
            <div class="sentence-number">${index + 1}</div>
            <div class="sentence-chinese">${sentence.simplified}</div>
            <div class="sentence-pinyin">${sentence.pinyin}</div>
            <div class="sentence-english">${sentence.english}</div>
        `;
        sentencesContainer.appendChild(sentenceCard);
    });
}

// Switch tabs
function switchTab(tabName) {
    // Remove active class from all tabs and panels
    tabs.forEach(tab => tab.classList.remove('active'));
    tabPanels.forEach(panel => panel.classList.remove('active'));
    
    // Add active class to selected tab and panel
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(tabName).classList.add('active');
}


// Initialize voices when page loads (for Web Speech API)
window.addEventListener('load', () => {
    if ('speechSynthesis' in window) {
        // Load voices
        speechSynthesis.getVoices();
        
        // Some browsers require user interaction first
        document.addEventListener('click', () => {
            speechSynthesis.getVoices();
        }, { once: true });
    }
});

// Download CSV function
function downloadCSV(type) {
    const dayData = lessonsData[currentDay];
    let csvContent = '';
    let filename = '';
    
    if (type === 'vocabulary') {
        csvContent = 'Pinyin,Simplified,Traditional,English\n';
        dayData.vocabulary.forEach(word => {
            csvContent += `"${word.pinyin}","${word.simplified}","${word.traditional}","${word.english}"\n`;
        });
        filename = `Day${currentDay}_Vocabulary.csv`;
    } else if (type === 'sentences') {
        csvContent = 'Simplified,Pinyin,English\n';
        dayData.sentences.forEach(sentence => {
            csvContent += `"${sentence.simplified}","${sentence.pinyin}","${sentence.english}"\n`;
        });
        filename = `Day${currentDay}_Sentences.csv`;
    }
    
    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        changeDay(-1);
    } else if (e.key === 'ArrowRight') {
        changeDay(1);
    }
});

/*
DATA FORMAT INSTRUCTIONS:
=======================

To add data for days 2-30, follow this exact format for each day:

1. VOCABULARY FORMAT:
{
    pinyin: "pinyin_with_tones",
    simplified: "简体字",
    traditional: "繁體字", 
    english: "English meaning"
}

2. SENTENCES FORMAT:
{
    simplified: "Chinese sentence in simplified characters",
    pinyin: "Pinyin with proper tones and spacing",
    english: "English translation"
}

3. EXAMPLE FOR DAY 2 (Daily Activities):
Replace the empty arrays in lessonsData[2] with:

vocabulary: [
    { pinyin: "qǐchuáng", simplified: "起床", traditional: "起床", english: "get up" },
    { pinyin: "shuìjiào", simplified: "睡觉", traditional: "睡覺", english: "sleep" },
    { pinyin: "chīfān", simplified: "吃饭", traditional: "吃飯", english: "eat" },
    // ... continue with 17+ more words
],

sentences: [
    { 
        simplified: "我每天七点起床。", 
        pinyin: "Wǒ měitiān qī diǎn qǐchuáng.", 
        english: "I get up at 7 o'clock every day." 
    },
    // ... continue with 29+ more sentences
]

4. HSK 3 VOCABULARY THEMES (suggested):
- Day 2: Daily Activities (起床, 睡觉, 吃饭, 工作, 学习, etc.)
- Day 3: Food & Drinks (米饭, 面条, 茶, 咖啡, 水果, etc.)
- Day 4: Colors & Clothing (红色, 蓝色, 衣服, 裤子, 鞋子, etc.)
- Continue with the themes already listed in the lessonsData structure

5. IMPORTANT NOTES:
- Each day should have 20+ vocabulary words
- Each day should have 30 example sentences  
- Use proper pinyin with tone marks (ā, á, ǎ, à)
- Include both simplified and traditional characters
- Sentences should use vocabulary from current and previous days
- Ensure vocabulary aligns with HSK 3 level requirements

Simply copy this format and paste your data into the corresponding day objects in the lessonsData structure.
*/