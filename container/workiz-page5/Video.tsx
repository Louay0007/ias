import { PlayVideo } from "@/components";

export default function Video() {
	return (
		<div
			style={{
				width: "100%",
				maxWidth: "800px", // Desktop max width
				margin: "0 auto", // Center the video
				aspectRatio: window.innerWidth <= 500 ? "9 / 16" : "16 / 5", // Mobile: 9:16, Desktop: 16:9
				maxHeight: "3000px", // Prevents overflow on smaller screens
			}}
		>
			<PlayVideo
				videosrc="/iastam.mp4"
			/>
		</div>
	);
};