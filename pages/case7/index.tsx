"use client";
import {
	Heroworkiz7,
	Aboutworkiz7,
	Chelenge7,
	Result7,
	Works7,
	Credit7,
	VideoWorkiz7,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function Work() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor="#f1f1f1">
				<Heroworkiz7 />
				<Aboutworkiz7 />
				<Chelenge7 />
				<VideoWorkiz7 />
				<Result7 />
				<Credit7 />
				<Works7 />
				<Ready />
			</Curve>
		</>
	);
}
