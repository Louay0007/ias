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
								TSYP brought a new level of professionalism to our presentations that we were missing before. When I shared the presentations with our management and organizing teams, they were impressed — the final product was exactly what we needed to elevate the experience for our attendees and partners
								</p>
							</div>
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									The Result
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
								We’ve created impactful presentations for TSYP that enhanced onboarding for new members, empowered event organizers, and streamlined communication, making the overall experience more effective and engaging.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
