import {
  Box,
  Button,
  IconButton,
  Pagination,
  PaginationItem,
} from "@mui/material"
import { makeStyles } from "@mui/styles"
import React, { useEffect, useRef, useState } from "react"
import { AiOutlineVerticalLeft } from "react-icons/ai"
import { AiOutlineVerticalRight } from "react-icons/ai"
import { AiOutlineLeft } from "react-icons/ai"
import { AiOutlineRight } from "react-icons/ai"
import PostsPerPage from "./PostsPerPage"
import { IoIosArrowDropleftCircle } from "react-icons/io"
import { IoIosArrowDroprightCircle } from "react-icons/io"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaginationItem-icon": {
      fill: "#fff",
    },
  },
}))
const PaginationComponent = ({
  postsPerPage,
  setPostsPerPage,
  totalPosts,
  paginate,
  currentPage,
}) => {
  const classes = useStyles()
  const [activeButton, setActiveButton] = useState(currentPage)
  console.log("Posts per page in pagination", postsPerPage)
  console.log("Total Posts in pagination", totalPosts)
  console.log("Buttons to be rendered", Math.ceil(totalPosts / postsPerPage))

  const pageNumbers = Math.ceil(totalPosts / postsPerPage)

  function handleChange(event, value) {
    console.log("Button clicked", value)
    paginate(value)
  }

  return (
    <Box style={styles.main}>
      <Pagination
        className={classes.root}
        variant="outlined"
        shape="rounded"
        count={pageNumbers}
        page={currentPage}
        onChange={handleChange}
        renderItem={item => (
          <PaginationItem
            sx={{
              backgroundColor: "transparent",
              borderRadius: "50%",
              color: "#000",
              fontSize: "1.1rem",
              fontWeight: "bold",
              border: "none",
              "&.css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon": {
                fill: "#fff !important",
              },
              "&.MuiPaginationItem-previousNext": {
                backgroundColor: "#39B54A !important",

                "&.MuiSvgIcon-root": {
                  fill: "#fff !important",
                },
              },
              "&.Mui-selected": {
                color: "#39B54A",
                backgroundColor: "transparent",
                fontWeight: "bold",
                // "&:hover": {
                //   backgroundColor: "#39B54A",
                //   filter: "brightness(1.2)",
                // },
              },
              "&.MuiPaginationItem-icon": {
                fill: "#fff !important",
                color: "#fff",
                backgroundColor: "#fff",
              },
              "&.css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon": {
                fill: "#fff !important",
                color: "#fff",
                backgroundColor: "#fff",
              },
              // "&:hover": {
              //   backgroundColor: "#39B54A",
              //   filter: "brightness(2)",
              // },
            }}
            {...item}
          />
        )}
      />
      {/* <PostsPerPage
        postsPerPage={postsPerPage}
        setPostsPerPage={setPostsPerPage}
        totalPosts={totalPosts}
      /> */}
    </Box>
  )
}

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
}

export default PaginationComponent
