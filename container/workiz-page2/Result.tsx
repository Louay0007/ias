export default function Result() {
	return (
		<section className="w-full padding-y">
			<div className="w-full flex flex-col">
				<h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
					The Result
				</h1>
				<div className="w-full border-t border-[#21212155] pt-[20px]">
					<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-y-[20px] padding-x">
						<div className="w-1/2 sm:w-full xm:w-full">
							<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
								Project Outcomes:
							</h3>
						</div>
						<div className="w-1/2 sm:w-full xm:w-full flex sm:flex-col xm:flex-col gap-[20px]">
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									Feedback
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
								Hack4IOT brought a new level of innovation and problem-solving to IoT security challenges. Participants showcased impressive technical skills, and our sponsors were thrilled with the creative and practical solutions developed during the hackathon. The event successfully fostered collaboration and highlighted the importance of cybersecurity in IoT.
								</p>
							</div>
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									The Impact
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
								Hack4IOT  resulted in 10+ innovative cybersecurity solutions, strengthened industry connections, and provided participants with hands-on experience in tackling real-world security threats.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
