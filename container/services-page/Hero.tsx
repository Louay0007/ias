export default function Hero() {
	return (
		<section className="w-full min-h-screen">
			<div className="w-full flex flex-col justify-between">
				<div className="w-full flex flex-col">
					<div className="w-full margin padding-x">
						<div>
							<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
							Our Mission
							</h1>
						</div>
					</div>
					<div className="w-full border-t border-[#21212155]">
						<p className="w-[80%] sm:w-full xm:w-full sub-heading font-normal padding-x font-NeueMontreal text-secondry padding-y">
						We equip students with the tools, resources, and opportunities to excel in industrial applications, fostering growth, innovation, and collaboration.
						</p>
					</div>
					<div className="w-full flex border-t border-[#21212155] py-[20px] flex-col">
						<div className="w-full flex justify-between sm:flex-col xm:flex-col padding-x sm:gap-[20px] xm:gap-[20px]">
							<div className="w-[50%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry">
								Our Approach:
								</p>
							</div>
							<div className="w-[50%] sm:w-full xm:w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]	">
								<div className="w-[50%] sm:w-full xm:w-full flex flex-col gap-[20px]">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
										Purpose Drives Progress
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
										What do you aspire to accomplish? By understanding your goals, we tailor our support to ensure you achieve success whether through skill development, networking, or industry exposure.
										</p>
									</div>
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
										Community Fuels Success
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
										Who are you connecting with? It’s about building a supportive network of peers, mentors, and professionals. By understanding your needs and aspirations, we create personalized pathways for growth and collaboration that matter most to you.
										</p>
									</div>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full">
									<div className="flex flex-col gap-[20px]">
										<p className="paragraph font-NeueMontreal text-secondry underline">
										Hands-On Learning Transforms Knowledge
										</p>
										<p className="paragraph font-NeueMontreal text-secondry">
										How do you apply what you’ve learned? We believe in learning by doing. Through workshops, projects, and real-world experiences, we ensure that knowledge gained is not only theoretical but practical and ready to be applied in the industry.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
