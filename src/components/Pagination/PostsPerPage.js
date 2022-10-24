import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const PostsPerPage = ({ postsPerPage, setPostsPerPage, totalPosts }) => {
  const handleChange = (event) => {
    setPostsPerPage(event.target.value);
  };
  return (
    <Box
      sx={{
        width: "fit-content",
        height: "32px",
        margin: "0 5px",
        borderRadius: 5,
      }}
    >
      <select
        style={{
          borderRadius: 5,
          width: "fit-content",
          height: "32px",
          backgroundColor: "#9fef00",
          border: "none",
          outline: "none",
          textAlignLast: "right",
          // paddingRight: "29px",
        }}
        value={postsPerPage}
        onChange={handleChange}
      >
        <option value={totalPosts} style={{ textAlign: "center" }}>
          All Posts
        </option>
        <option value={2}>2 Posts</option>
        <option value={4}>4 Posts</option>
        <option value={6}>6 Posts</option>
        <option value={8}>8 Posts</option>
        <option value={12}>12 Posts</option>
      </select>
    </Box>
  );
};

export default PostsPerPage;
