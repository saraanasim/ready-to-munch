import { Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineVerticalLeft } from "react-icons/ai";
import { AiOutlineVerticalRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [activeButton, setActiveButton] = useState(currentPage);
  console.log("Posts per page in pagination", postsPerPage);
  console.log("Total Posts in pagination", totalPosts);
  console.log("Buttons to be rendered", Math.ceil(totalPosts / postsPerPage));

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  function handleClick(e) {
    console.log("Button clicked", e.target.value);
    setActiveButton(e.target.value);
    paginate(e.target.value);
  }
  useEffect(() => {}, [activeButton]);

  return (
    <Box style={styles.main}>
      <IconButton sx={styles.pageBtnLeftRight}>
        <AiOutlineVerticalRight />
      </IconButton>
      <IconButton sx={styles.pageBtnLeftRight}>
        <AiOutlineLeft />
      </IconButton>
      {pageNumbers.map((number, index) => {
        console.log("Number is", number);
        return (
          <Button
            style={
              activeButton === number ? styles.pageBtnActive : styles.pageBtn
            }
            value={number}
            key={number}
            onClick={handleClick}
          >
            {number}
          </Button>
        );
      })}
      <Button sx={styles.pageBtnLeftRight}>
        <AiOutlineRight />
      </Button>
      <Button sx={styles.pageBtnLeftRight}>
        <AiOutlineVerticalLeft />
      </Button>
    </Box>
  );
};

const styles = {
  main: {
    height: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  pageBtn: {
    width: "50px",
    height: "40px",
    border: "none",
    backgroundColor: "yellowgreen",
    margin: "0 5px",
  },
  pageBtnActive: {
    width: "50px",
    height: "40px",
    border: "none",
    backgroundColor: "blue",
    margin: "0 5px",
  },
  pageBtnLeftRight: {
    width: "50px",
    height: "40px",
    border: "none",
    backgroundColor: "yellowgreen",
    margin: "0 5px",
    borderRadius: 0,
  },
};

export default Pagination;
