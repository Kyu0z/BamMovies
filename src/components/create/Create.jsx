import React, { useRef } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./create.css";

// icon
import NoteAddIcon from "@mui/icons-material/NoteAdd";

// Custom button
import { orange } from "@mui/material/colors";

import { Avatar, IconButton, Stack } from "@mui/material";

const Create = () => {
  // Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 800,
    height: 350,
    transform: "translate(-50%, -50%)",
    bgcolor: "rgb(0 0 0 / 50%)",
    // border: "2px solid #000",
    boxShadow: 14,
    p: 4,
  };

  // Tooltip
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
      color: "#fff",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));

  //   Custom button color
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    "&:hover": {
      backgroundColor: orange[700],
    },
  }));

  return (
    <>
      <div>
        <ColorButton
          variant="contained"
          sx={{
            color: "red",
            fontSize: "12.5rem",
            bacgroundColor: "#EF4823",
          }}
          onClick={handleOpen}
        >
          <LightTooltip title="Create new movies">
            <div
              className="createBtn"
              style={{
                position: "fixed",
                right: "3rem",
                bottom: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: "60px",
                fontSize: "10rem",
                backgroundColor: "#EF4823",
                borderRadius: "50%",
                cursor: "pointer",
                zIndex: "1000",
              }}
            >
              {/* <input type="file" style={{display: 'none'}} ref={inputFileEl}/> */}
              <NoteAddIcon
                sx={{ color: "white", fontSize: "2.5rem" }}
                onClick={(ev) => {
                  // inputFileEl.current.click();
                }}
              />
            </div>
          </LightTooltip>
        </ColorButton>
        <Modal
          open={open}
          onClose={handleClose}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="createBox">
              <div
                className="createBox-heading"
                style={{
                  position: "relative",
                  borderBottom: "1px solid #666",
                  paddingBottom: "1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "500", textAlign: "center" }}
                >
                  Create new movies
                </Typography>
              </div>
              <div className="createBox-info" style={{ marginTop: "2rem" }}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter movie name..."
                  required
                  style={{
                    marginBottom: "1.6rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    height: "40px",
                    width: "100%",
                    padding: "8px 2px",
                    border: "1px solid #b3b3b3",
                    borderRadius: "3px",
                    outline: "none",
                    fontSize: "1.4rem",
                  }}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter movie content..."
                  required
                  style={{
                    marginBottom: "1.6rem",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    height: "40px",
                    width: "100%",
                    padding: "8px 2px",
                    border: "1px solid #b3b3b3",
                    borderRadius: "3px",
                    outline: "none",
                    fontSize: "1.4rem",
                  }}
                />
                <Stack direction="row" spacing={2}>
                  <input
                    type="file"
                    name=""
                    id=""
                    placeholder="Enter movie content..."
                    required
                    style={{
                      marginBottom: "1.6rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      height: "40px",
                      width: "100%",
                      padding: "8px 2px",
                      border: "1px solid #b3b3b3",
                      borderRadius: "3px",
                      outline: "none",
                      fontSize: "1.4rem",
                    }}
                  />
                  <input
                    type="file"
                    name=""
                    id=""
                    placeholder="Enter movie content..."
                    required
                    style={{
                      marginBottom: "1.6rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                      height: "40px",
                      width: "100%",
                      padding: "8px 2px",
                      border: "1px solid #b3b3b3",
                      borderRadius: "3px",
                      outline: "none",
                      fontSize: "1.4rem",
                    }}
                  />
                </Stack>
                <Stack alignItems="center" sx={{ marginTop: "2rem" }}>
                  <Button
                    variant="contained"
                    sx={{
                      width: "50%",
                      padding: "1.2rem 0",
                      fontSize: "1.5rem",
                      backgroundColor: "#red",
                    }}
                  >
                    Update Movie
                  </Button>
                </Stack>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default Create;
