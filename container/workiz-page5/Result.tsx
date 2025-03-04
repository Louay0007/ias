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
								Being part of IASTAM was a transformative experience for our team. The event provided a platform to exchange knowledge, engage with experts, and refine our approach to industrial applications. The insights and feedback we received have been invaluable in strengthening our future initiatives.
								</p>
							</div>
							<div className="flex flex-col gap-y-[10px] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry underline">
									The Result
								</p>
								<p className="paragraph font-NeueMontreal text-secondry">
								Our participation in IASTAM was a valuable opportunity to engage with industry experts, exchange knowledge, and showcase our expertise in industrial applications. Through insightful discussions and hands-on experiences, we strengthened our technical and professional skills while building meaningful connections with fellow participants. This experience not only broadened our perspectives but also reinforced our commitment to innovation and continuous learning within the IEEE IAS ISSATM SBC community.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
