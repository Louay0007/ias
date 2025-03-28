"use client";
import {
	Heroworkiz1,
	Aboutworkiz1,
	Chelenge1,
	Result1,
	Works1,
	Credit1,
	VideoWorkiz1,
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
				<Heroworkiz1 />
				<Aboutworkiz1 />
				<Chelenge1 />
				<VideoWorkiz1 />
				<Result1 />
				<Credit1 />
				<Works1 />
				<Ready />
			</Curve>
		</>
	);
}
