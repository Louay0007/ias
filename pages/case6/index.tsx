"use client";
import {
	Heroworkiz6,
	Aboutworkiz6,
	Chelenge6,
	Result6,
	Works6,
	Credit6,
	VideoWorkiz6,
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
				<Heroworkiz6 />
				<Aboutworkiz6 />
				<Chelenge6 />
				<VideoWorkiz6 />
				<Result6 />
				<Credit6 />
				<Works6 />
				<Ready />
			</Curve>
		</>
	);
}
