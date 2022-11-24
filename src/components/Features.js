import FeatureItem from "./FeatureItem"
import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'

function Features() {

    const featureData = [
        {
            index: 0,
            img: chat,
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            index: 1,
            img: money,
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!"
        },
        {
            index: 2,
            img: security,
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe."
        }
    ]
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {featureData.map((feature) => {
                console.log(feature.title)
                return <FeatureItem key={feature.index} img={feature.img} title={feature.title} text={feature.text} />
            })}
        </section>
    )
}

export default Features