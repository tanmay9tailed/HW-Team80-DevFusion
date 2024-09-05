import React, { useContext } from 'react';
import splitStringUsingRegex from './utils/splitStringUsingRegex';
import { motion } from "framer-motion";
import Carousel from './Carousel/Carousel';
import { LanguageContext } from '../../store/LanguageStore';

const English = {
    heading: "Samvidhan - Learning about our constitution, the gamified way.",
    mission: "Welcome to Samvidhan! Our mission is to make learning about the Indian Constitution engaging and interactive. We believe that understanding the Constitution is essential for every citizen, and we aim to provide this knowledge in a fun and accessible way through our fun games. We are dedicated to educating people about the Indian Constitution. Our games cover various aspects, including its history, key articles, amendments, and important figures. Whether you are a student, a professional, or simply someone interested in learning more about the Constitution, our app is designed to provide valuable knowledge in an enjoyable format.",
    features:"Our Features",
    news:"Daily live news in INDIA",
    chat:"24x7 Live Chatbot",
    game:"Fun and Intervactive Games",
    language:"Language Translation"
};

const Odia = {
    heading: "ସମ୍ବିଦାନ - ଆମର ସମ୍ବିଧାନ, ଖେଳାଯାଇଥିବା ଉପାୟ ବିଷୟରେ ଶିଖିବା",
    mission: "ସାମ୍ବିଧାନକୁ ସ୍ୱାଗତ! ଆମର ଲକ୍ଷ୍ଯ଼ ହେଉଛି ଭାରତୀଯ଼ ସମ୍ବିଧାନ ବିଷଯ଼ରେ ଶିକ୍ଷାକୁ ଆକର୍ଷଣୀଯ଼ ଏବଂ ଇଣ୍ଟରାକ୍ଟିଭ୍ କରିବା। ଆମେ ବିଶ୍ୱାସ କରୁ ଯେ ପ୍ରତ୍ଯ଼େକ ନାଗରିକଙ୍କ ପାଇଁ ସମ୍ବିଧାନକୁ ବୁଝିବା ଜରୁରୀ, ଏବଂ ଆମେ ଆମର ମଜାଦାର ଖେଳ ମାଧ୍ଯ଼ମରେ ଏହି ଜ୍ଞାନକୁ ଏକ ମଜାଦାର ଏବଂ ସୁଲଭ ଉପାଯ଼ରେ ପ୍ରଦାନ କରିବାକୁ ଲକ୍ଷ୍ଯ଼ ରଖିଛୁ। ଭାରତୀଯ଼ ସମ୍ବିଧାନ ବିଷଯ଼ରେ ଲୋକଙ୍କୁ ଶିକ୍ଷିତ କରିବା ପାଇଁ ଆମେ ସମର୍ପିତ। ଆମର ଖେଳ ଏହାର ଇତିହାସ, ପ୍ରମୁଖ ନିବନ୍ଧ, ସଂଶୋଧନ ଏବଂ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ବ୍ଯ଼କ୍ତିତ୍ୱ ସମେତ ବିଭିନ୍ନ ଦିଗକୁ ଅନ୍ତର୍ଭୁକ୍ତ କରେ | ଆପଣ ଜଣେ ଛାତ୍ର ହୁଅନ୍ତୁ, ଜଣେ ପେସାଦାର ହୁଅନ୍ତୁ, କିମ୍ବା କେବଳ ସମ୍ବିଧାନ ବିଷଯ଼ରେ ଅଧିକ ଜାଣିବାକୁ ଆଗ୍ରହୀ ବ୍ଯ଼କ୍ତି ହୁଅନ୍ତୁ, ଆମର ଆପ୍ ଏକ ଆନନ୍ଦଦାଯ଼କ ଫର୍ମାଟରେ ମୂଲ୍ଯ଼ବାନ ଜ୍ଞାନ ପ୍ରଦାନ କରିବା ପାଇଁ ଡିଜାଇନ୍ ହୋଇଛି।",
    features:"ଆମର ବୈଶିଷ୍ଟ୍ଯ଼",
    news:"ଭାରତରେ ଦୈନିକ ଲାଇଭ୍ ନ୍ଯ଼ୁଜ୍",
    chat:"24x7 ଲାଇଭ୍ ଚାଟ୍ବଟ୍",
    game:"ମଜାଳିଆ ଏବଂ ପାରସ୍ପରିକ କ୍ରିଯ଼ାଶୀଳ ଖେଳ",
    language:"ଭାଷା ଅନୁବାଦ"
};

const Hindi = {
    heading: "संविधान-हमारे संविधान के बारे में सीखना, गेमिफाइड तरीका।",
    mission: "संविधान में आपका स्वागत है! हमारा मिशन भारतीय संविधान के बारे में सीखने को आकर्षक और संवादात्मक बनाना है। हम मानते हैं कि संविधान को समझना प्रत्येक नागरिक के लिए आवश्यक है, और हमारा उद्देश्य अपने मजेदार खेलों के माध्यम से इस ज्ञान को मजेदार और सुलभ तरीके से प्रदान करना है। हम भारतीय संविधान के बारे में लोगों को शिक्षित करने के लिए समर्पित हैं। हमारे खेल इसके इतिहास, प्रमुख लेखों, संशोधनों और महत्वपूर्ण आंकड़ों सहित विभिन्न पहलुओं को शामिल करते हैं। चाहे आप एक छात्र हों, एक पेशेवर हों, या बस संविधान के बारे में अधिक जानने में रुचि रखने वाले व्यक्ति हों, हमारा ऐप एक सुखद प्रारूप में मूल्यवान ज्ञान प्रदान करने के लिए डिज़ाइन किया गया है।",
    features:"हमारी विशेषताएँ",
    news:"भारत में दैनिक लाइव समाचार",
    chat:"24x7 लाइव चैटबॉट",
    game:"मजेदार और अंतःक्रियात्मक खेल",
    language:"भाषा अनुवाद"
};



const charVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    reveal: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const imageVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 8
        }
    }
};

function About() {

    const { language } = useContext(LanguageContext);
    let lang = English;
    if (language == "English") lang = English;
    else if (language == "Hindi") lang = Hindi;
    else if (language == "Odia") lang = Odia;

    const headingChars = splitStringUsingRegex(lang.heading);
    const missionChars = splitStringUsingRegex(lang.mission);


    return (
        <>
            <div className="py-16 h-100% bg-gradient-to-br from-blue-900 via-black to-blue-900">
                <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <motion.div
                            className="md:5/12 lg:w-5/12"
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                        >
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/5d45b55d7563de000169a046/d2b4ca0a-1944-48ce-8416-c76fdf365222/Indian-Constitution-graphic.png"
                                alt="image"
                            />
                        </motion.div>
                        <div className="md:7/12 lg:w-6/12">
                            <motion.h2
                                initial="hidden"
                                whileInView="reveal"
                                transition={{ staggerChildren: 0.05 }}
                                className="text-2xl text-white font-bold md:text-5xl">
                                {headingChars.map((char, index) => (
                                    <motion.span key={index} transition={{ duration: 1 }} variants={charVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.p
                                initial="hidden"
                                whileInView="reveal"
                                transition={{ staggerChildren: 0.015, delay: 1 }}
                                className="mt-6 text-gray-300 text-lg">
                                {missionChars.map((char, index) => (
                                    <motion.span key={index} transition={{ duration: 1 }} variants={charVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.p>

                        </div>
                    </div>
                </div>

                <h2 className='text-5xl text-center text-white font-bold mt-8 p-8'>{lang.features}</h2>

                <Carousel news={lang.news} chat={lang.chat} game={lang.game} lang={lang.language}/>
            </div>
        </>
    );
}

export default About;
