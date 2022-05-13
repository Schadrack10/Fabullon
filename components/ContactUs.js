import React, { useState } from "react";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useSnackbar } from "notistack";
import axios from "axios";
import { GooSpinner } from "react-spinners-kit";

const ContactUs = () => {
  const minWidth600px = useMediaQuery("(min-width:600px)");
  const { enqueueSnackbar } = useSnackbar();
  const [processing, setIsProcessing] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    query: "",
  });

  const handleFieldChange = (e) => {
    const field = e.currentTarget.name;
    setForm({
      ...form,
      [field]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const formValues = Object.values(form);

    if (formValues.includes("")) {
      enqueueSnackbar("please fill in all fields", {
        variant: "warning",
      });
      setIsProcessing(false);
    } else {
      axios
        .post("/api/email", {
          cell: form.number,
          email: form.email,
          message: form.query,
          name: form.name,
        })
        .then((res) => {
          if (res.data.message == "MAIL_SENT") {
            enqueueSnackbar("Email successfully sent", {
              variant: "success",
            });

            setForm({
              name: "",
              email: "",
              number: "",
              query: "",
            });

            setIsProcessing(false);
          } else {
            enqueueSnackbar(`Failed to send email : ${res.data.err.message}`, {
              variant: "error",
            });

            setIsProcessing(false);
          }
        })
        .catch((err) => {
          enqueueSnackbar(`Failed to send email : ${err.message}`, {
            variant: "error",
          });

          setIsProcessing(false);
        });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        p: 4,
        pt: "100px",
      }}
      id="contact"
    >
      <Grid
        container
        spacing={2}
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              width: "100%",
              pb: 4,
              pl:6
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontSize: minWidth600px ? "auto" : "30px" }}
            >
              CONTACT US
            </Typography>
            <br />
            <Typography variant="body1" sx={{ pl: 1, opacity: 0.7 }}>
              Email:
              <br />
              yourcompany@haha.com
            </Typography>
            <br />
            <Typography variant="body1" sx={{ pl: 1, opacity: 0.7 }}>
              Address:
              <br />
              16 Jozi street, Ekasilam
            </Typography>
            <br />
            <Typography variant="body1" sx={{ pl: 1, opacity: 0.7 }}>
              Contact:
              <br />
              0610 333 003
            </Typography>


            <Button
                sx={{
                  background: "#f9b33a !important",
                  borderRadius: 0,
                  paddingLeft: "18px",
                  mt: 4,
                  pr: 2,
                  color: "#fff",
                  // pointerEvents: processing ? "none" : "auto",
                  // opacity: processing ? 0.8 : 1,
                  height: "38px",
                  width: "132px",
                }}
                size="small"
                color="secondary"
              >
                 VIEW MAP
              </Button>
          </Box>
        </Grid>





        <Grid item xs={12} md={8}>
          <Box
            sx={{
              width: "100%",
              p: 2,
              background: "#fff",
              boxShadow: 2,
              pb: 4,
              border:'7px solid #f9b33a'
            }}
          >
            
            <form>

              <Box>
                <TextField
                  label="Name"
                  fullWidth
                //   variant="standard"
                  name="name"
                  onChange={handleFieldChange}
                  value={form.name}
                />
                <br />
                <br />

                <TextField
                  label="Email address"
                  fullWidth
                //   variant="standard"
                  type="email"
                  name="email"
                  onChange={handleFieldChange}
                  value={form.email}
                />
                <br />
                <br />

                <TextField
                  label="Contact number"
                  fullWidth
                //   variant="standard"
                  type="tel"
                  name="number"
                  onChange={handleFieldChange}
                  value={form.number}
                />
                <br />
                <br />

                <TextField
                    id="standard-textarea"
                    placeholder="Description"
                    multiline
                    // variant="standard"
                    fullWidth
                    rows={5}
                    autoFocus={true}
                    name="query"
                    onChange={handleFieldChange}
                    value={form.query}
                />
              </Box>

              <Box sx={{mt:4,display:'flex',justifyContent:'flex-end'}}>
              <Button
                sx={{
                  background: "#111 !important",
                  borderRadius: 0,
                  paddingLeft: "24px",
                //   mt: 4,
                  pr: 2,
                  color: "#fff",
                  pointerEvents: processing ? "none" : "auto",
                  opacity: processing ? 0.8 : 1,
                  height: "38px",
                  width: "132px",
                }}
                size="small"
                color="secondary"
                onClick={handleSubmit}
              >
                {processing ? (
                  <>
                    SENDING
                    <Box sx={{ ml: 1 }}>
                      {/* <GooSpinner size={30} color="#fff" loading={true} /> */}
                    </Box>
                  </>
                ) : (
                  <>
                    SEND
                    <SendIcon
                      sx={{
                        color: "#fff",
                        fontSize: "17px",
                        transform: "rotate(-35deg)",
                        ml: 2,
                        mb: "4px",
                      }}
                    />
                  </>
                )}
              </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
