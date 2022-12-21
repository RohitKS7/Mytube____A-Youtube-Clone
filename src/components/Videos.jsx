import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, justifyContentCenter }) => {
  return (
    <Stack
      direction="row"
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
