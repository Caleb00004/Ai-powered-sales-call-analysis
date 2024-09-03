import HomeLayout from "@/components/layouts/HomeLayout"

const FeaturesIntegration = () => {
    return (
        <HomeLayout>
            <div className="bg-white text-[#545454] py-[6em] ">
                <div className="w-[90%] mdx2:w-[52em] text-center mx-auto ">
                    <div className="mb-16">
                        <p className="bg-[#F7F1F8] text-[14px] rounded-3xl text-[#C32781] inline-block font-[500] px-3">Features</p>
                        <h1 className="text-[35px] sm:text-[48px] text-[#101828] font-[700] leading-[40px] sm:leading-[60px]">Seamless Integration with Zoom, Google Meet, and Kixie</h1>
                        <p className="text-[16px] sm:text-[18px] mt-4 text-[#667085]">The latest industry news, interviews, technologies, and resources</p>
                    </div>
                    
                    <div className="text-left text-[14px] sm:text-[16px]">
                        <div>
                            <p>In the fast-paced world of sales, where every conversation could mean the difference between closing a deal and losing a potential customer, the ability to receive and act on feedback in real
                                time is invaluable. Traditionally, sales teams have relied on periodic reviews, coaching sessions, and post-call analyses to refine their techniques and improve performance. However, the emergence of AI-powered feedback systems is transforming this dynamic, offering real-time insights that are not only timely but also deeply personalized.
                                <br /><br />In this blog post, we'll explore how AI-powered feedback is revolutionizing sales performance, the benefits it offers to sales teams, and the future potential of this technology.</p>
                        </div>

                        <div className="mt-8">
                            <h1 className="text-[23px] sm:text-[28px] font-[600] text-[#252525] pb-4">The Challenge of Traditional Sales Feedback</h1>
                            <p className="pb-8">Traditional sales feedback processes are often slow, subjective, and inconsistent. Sales managers typically review recorded calls or rely on sales reps' self-reported performance metrics to provide feedback. This process can be time-consuming, and the feedback may come too late to be actionable for the sales rep's current deals. Additionally, human biases and varying levels of sales expertise can lead to inconsistent evaluations.</p>

                            <p className="pb-8">Moreover, traditional feedback mechanisms lack the ability to analyze the nuances of a sales conversation in real-time. By the time feedback is delivered, the opportunity to make improvements during the ongoing sales cycle may already be lost. This delay can result in missed opportunities, lower conversion rates, and ultimately, a less effective sales team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default FeaturesIntegration