"use client";
import {
	Heroworkiz8,
	Aboutworkiz8,
	Chelenge8,
	Result8,
	Works8,
	Credit8,
	VideoWorkiz8,
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
				<Heroworkiz8 />
				<Aboutworkiz8 />
				<Chelenge8 />
				<VideoWorkiz8 />
				<Result8 />
				<Credit8 />
				<Works8 />
				<Ready />
			</Curve>
		</>
	);
}
