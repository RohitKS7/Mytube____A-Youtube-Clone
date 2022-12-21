import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard, Loader } from "./";

const Videos = ({ videos, justifyContentCenter, directionColumn }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={directionColumn ? "column" : "row"}
      flexWrap="wrap"
      gap={2}
      sx={{
        justifyContent: {
          xs: "center",
          md: justifyContentCenter ? "center" : "start",
        },
      }}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
