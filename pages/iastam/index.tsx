"use client";
import {
	Heroworkiz5,
	Aboutworkiz5,
	Chelenge5,
	Result5,
	Works5,
	Credit5,
	VideoWorkiz5,
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
				<Heroworkiz5 />
				<Aboutworkiz5 />
				<Chelenge5 />
				<VideoWorkiz5 />
				<Result5 />
				<Credit5 />
				<Works5 />
				<Ready />
			</Curve>
		</>
	);
}
