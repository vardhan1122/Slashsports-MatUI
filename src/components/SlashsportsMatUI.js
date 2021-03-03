import React from 'react';
import { AddOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function SlashsportsMatUI(props) {
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Paper style={{ padding: "20px", background: "#e0e2e4" }}>
          <Paper
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Grid container>
              <Grid
                zeroMinWidth
                item
                sm={2}
                xs={2}
                lg={2}
                md={2}
                style={{ backgroundColor: "#ffffff" }}
              >
                <div style={{ marginTop: "35px" }}>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <Avatar src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"></Avatar>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <List>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Explore"
                            style={{
                              color: "rgba(0,0,0,0.78)",
                              fontFamily: "sans-serif",
                              fontWeight: "600",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Shoes"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Clothing"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            primary="Gear"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
                <div style={{ marginTop: "380px" }}>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <List>
                        <ListItem button>
                          <ListItemText
                            primary="Log Out"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid zeroMinWidth item sm={10} xs={10} lg={10} md={10}>
                <div>
                  <Grid container>
                    <Grid
                      zeroMinWidth
                      item
                      sm={12}
                      xs={12}
                      lg={8}
                      md={8}
                      style={{ backgroundColor: "#fafafa" }}
                    >
                      <div style={{ marginTop: "35px" }}>
                        <Grid
                          container
                          alignContent="center"
                          alignItems="center"
                          justify="space-around"
                          direction="row"
                        >
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  color: "rgba(0,0,0,0.78)",
                                  fontFamily: "sans-serif",
                                  fontWeight: "600",
                                }}
                              >
                                Men
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                }}
                              >
                                Women
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                }}
                              >
                                Kid&#039;s
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                borderRadius: "20px",
                                padding: "10px",
                                background: "#f0f0f0",
                              }}
                            >
                              <i
                                className="fas fa-search"
                                style={{
                                  marginLeft: "10px",
                                  marginRight: "10px",
                                }}
                              ></i>
                              <input
                                placeholder="Search for items"
                                style={{
                                  border: "none",
                                  outline: "none",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                  background: "none",
                                  width: "100px",
                                  fontSize: "12px",
                                  fontFamily: "sans-serif",
                                  paddingRight: "10px",
                                }}
                              ></input>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                borderRadius: "20px",
                                padding: "10px",
                                background: "white",
                              }}
                            >
                              <Avatar
                                src="https://images.unsplash.com/photo-1536044635785-467d51fc5880?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fHNwb3J0cyUyMHdlYXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                                style={{ width: "40px", height: "40px" }}
                              ></Avatar>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px" }}>
                        <Grid container direction="row">
                          <Grid zeroMinWidth item xs={12}>
                            <img
                              src="https://images.unsplash.com/photo-1485633854337-3df7c7baed90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwaW1hZ2VzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{ borderRadius: "10px", width: "100%" }}
                            ></img>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px", marginTop: "-160px" }}>
                        <Grid container style={{ marginLeft: "10px" }}>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h1"
                              align="justify"
                              display="block"
                              style={{
                                fontSize: "22px",
                                fontFamily: "sans-serif",
                                color: "rgba(255,255,255,0.87)",
                                fontWeight: "600",
                              }}
                            >
                              GEAR TO PLAY ALL DAY
                            </Typography>
                            <Typography
                              variant="caption"
                              align="justify"
                              display="block"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(255,255,255,0.87)",
                                fontWeight: "100",
                              }}
                            >
                              Check Out the latest Slash styles made to play{" "}
                            </Typography>
                            <div>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Button
                                    style={{
                                      backgroundColor: "#1a1a3e",
                                      borderRadius: "20px",
                                      padding: "5px 20px",
                                      textTransform: "none",
                                      color: "rgba(255,255,255,0.85)",
                                      fontWeight: "100",
                                      fontSize: "12px",
                                      marginTop: "10px",
                                      fontFamily: "sans-serif",
                                    }}
                                  >
                                    Shop Now
                                  </Button>
                                </Grid>
                              </Grid>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px", marginTop: "70px" }}>
                        <Grid container justify="space-between">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.78)",
                                fontWeight: "600",
                              }}
                            >
                              Popular Now
                            </Button>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                fontSize: "15px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#9b9b9b",
                                fontWeight: "100",
                              }}
                            >
                              View All
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginBottom: "20px", margin: "20px" }}>
                        <Grid container spacing={2}>
                          <Grid zeroMinWidth item xs={6} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1604079586539-a1a1d0caf65b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxtZW4lMjB0JTIwc2hpcnQlMjBpbWFnZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Sports T-Shirt
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Men&#039;s Training Crew
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                45,26
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item xs={6} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1600071177478-88758260617d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHx3YXRjaGVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Men&#039;s Watch
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Hand Timer Watch{" "}
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                150,36
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item xs={6} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1533120238546-f0d4fa4d05c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwYmFnJTIwd2l0aCUyMGdpcmx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Utility Girl&#039;s Bag
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Sports Bag
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                60,26
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item xs={6} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1573318575683-dd2b389e3241?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTYzfHxzaG9lc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Men&#039;s Shoes
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Men&#039;s Sports Shoes
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                90,86
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid
                      zeroMinWidth
                      item
                      sm={12}
                      xs={12}
                      lg={4}
                      md={4}
                      style={{
                        backgroundColor: "#ffffff",
                        paddingTop: "50px",
                        paddingRight: "10px",
                      }}
                    >
                      <div style={{ marginTop: "20px" }}>
                        <Grid container justify="space-between">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.78)",
                                fontWeight: "600",
                                marginRight: "2px",
                              }}
                            >
                              Order List
                            </Button>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                fontSize: "12px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#9b9b9b",
                                fontWeight: "100",
                                marginRight: "2px",
                              }}
                            >
                              View All
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "35px" }}>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/photo-1519079754742-f83afaef6d35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwY2FwfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Cap
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    20,06
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  20,06
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/flagged/photo-1565023020151-143935be7cf8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQ1fHxzcG9ydHMlMjBoZWxtZW50fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Running Wear
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    42,75
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  42,75
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/flagged/photo-1568407477318-e20ccfaa2b36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Sports T-Shirt
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    54,06
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  54,06
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                      <div
                        style={{
                          marginLeft: "10px",
                          marginTop: "20px",
                          marginRight: "10px",
                        }}
                      >
                        <div
                          style={{
                            borderTop: "2px dashed rgba(155,155,155,0.31)",
                            height: "2px",
                          }}
                        ></div>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid container style={{ margin: "5px" }}>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.5)",
                                fontWeight: "600",
                              }}
                            >
                              Summary
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Subtotal
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                45,26
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Estimated Delivery &amp; Handling
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                0.00
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Estimated Duties and Taxes
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                -
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.7)",
                                fontWeight: "600",
                              }}
                            >
                              Total
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                116.87
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginBottom: "20px", marginTop: "50px" }}>
                        <Grid container justify="center">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                backgroundColor: "#1a1a3e",
                                borderRadius: "20px",
                                padding: "10px 80px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#ffffff",
                              }}
                            >
                              Check Out
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Hidden>
      <Hidden implementation="css" only={["xl", "xs", "sm", "lg"]}>
        <Paper>
          <Paper style={{ padding: "20px", background: "#e0e2e4" }}>
            <Grid container>
              <Grid
                zeroMinWidth
                item
                sm={2}
                xs={2}
                lg={2}
                md={2}
                style={{
                  backgroundColor: "#ffffff",
                  borderBottomLeftRadius: "20px",
                  borderTopLeftRadius: "20px",
                }}
              >
                <div style={{ marginTop: "35px" }}>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <Avatar src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"></Avatar>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <List>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Explore"
                            style={{
                              color: "rgba(0,0,0,0.78)",
                              fontFamily: "sans-serif",
                              fontWeight: "600",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Shoes"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Clothing"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            primary="Gear"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
                <div style={{ marginTop: "380px" }}>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <List>
                        <ListItem button>
                          <ListItemText
                            primary="Log Out"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid zeroMinWidth item sm={10} xs={10} lg={10} md={10}>
                <div>
                  <Grid container>
                    <Grid
                      zeroMinWidth
                      item
                      sm={12}
                      xs={12}
                      lg={8}
                      md={8}
                      style={{ backgroundColor: "#fafafa" }}
                    >
                      <div style={{ marginTop: "35px" }}>
                        <Grid
                          container
                          alignContent="center"
                          alignItems="center"
                          justify="space-around"
                          direction="row"
                        >
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  color: "rgba(0,0,0,0.78)",
                                  fontFamily: "sans-serif",
                                  fontWeight: "600",
                                }}
                              >
                                Men
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                }}
                              >
                                Women
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                }}
                              >
                                Kid&#039;s
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                borderRadius: "20px",
                                padding: "10px",
                                background: "#f0f0f0",
                              }}
                            >
                              <i
                                className="fas fa-search"
                                style={{
                                  marginLeft: "10px",
                                  marginRight: "10px",
                                }}
                              ></i>
                              <input
                                placeholder="Search for items"
                                style={{
                                  border: "none",
                                  outline: "none",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                  background: "none",
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  paddingRight: "10px",
                                }}
                              ></input>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px" }}>
                        <Grid container direction="row">
                          <Grid zeroMinWidth item xs={12}>
                            <img
                              src="https://images.unsplash.com/photo-1485633854337-3df7c7baed90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwaW1hZ2VzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{ borderRadius: "10px", width: "100%" }}
                            ></img>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px", marginTop: "-160px" }}>
                        <Grid container style={{ marginLeft: "10px" }}>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h1"
                              align="justify"
                              display="block"
                              style={{
                                fontSize: "22px",
                                fontFamily: "sans-serif",
                                color: "rgba(255,255,255,0.87)",
                                fontWeight: "600",
                              }}
                            >
                              GEAR TO PLAY ALL DAY
                            </Typography>
                            <Typography
                              variant="caption"
                              align="justify"
                              display="block"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(255,255,255,0.87)",
                                fontWeight: "100",
                              }}
                            >
                              Check Out the latest Slash styles made to play{" "}
                            </Typography>
                            <div>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Button
                                    style={{
                                      backgroundColor: "#1a1a3e",
                                      borderRadius: "20px",
                                      padding: "5px 20px",
                                      textTransform: "none",
                                      color: "rgba(255,255,255,0.85)",
                                      fontWeight: "100",
                                      fontSize: "12px",
                                      marginTop: "10px",
                                      fontFamily: "sans-serif",
                                    }}
                                  >
                                    Shop Now
                                  </Button>
                                </Grid>
                              </Grid>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px", marginTop: "70px" }}>
                        <Grid container justify="space-between">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.78)",
                                fontWeight: "600",
                              }}
                            >
                              Popular Now
                            </Button>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                fontSize: "15px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#9b9b9b",
                                fontWeight: "100",
                              }}
                            >
                              View All
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginBottom: "20px", margin: "20px" }}>
                        <Grid container spacing={2}>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1604079586539-a1a1d0caf65b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxtZW4lMjB0JTIwc2hpcnQlMjBpbWFnZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Sports T-Shirt
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Men&#039;s Training Crew
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                45,26
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1600071177478-88758260617d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHx3YXRjaGVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Men&#039;s Watch
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Hand Timer Watch{" "}
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                150,36
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1533120238546-f0d4fa4d05c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwYmFnJTIwd2l0aCUyMGdpcmx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Utility Girl&#039;s Bag
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Sports Bag
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                60,26
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1573318575683-dd2b389e3241?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTYzfHxzaG9lc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Men&#039;s Shoes
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Men&#039;s Sports Shoes
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                90,86
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid
                      zeroMinWidth
                      item
                      sm={12}
                      xs={12}
                      lg={4}
                      md={4}
                      style={{
                        backgroundColor: "#ffffff",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                        paddingRight: "10px",
                      }}
                    >
                      <div style={{ marginTop: "35px", marginRight: "25px" }}>
                        <Grid container justify="flex-end">
                          <Grid zeroMinWidth item>
                            <Avatar
                              src="https://images.unsplash.com/photo-1536044635785-467d51fc5880?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fHNwb3J0cyUyMHdlYXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "40px", height: "40px" }}
                            ></Avatar>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid container justify="space-between">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.78)",
                                fontWeight: "600",
                                marginRight: "2px",
                              }}
                            >
                              Order List
                            </Button>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                fontSize: "12px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#9b9b9b",
                                fontWeight: "100",
                                marginRight: "2px",
                              }}
                            >
                              View All
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "35px" }}>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/photo-1519079754742-f83afaef6d35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwY2FwfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Cap
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    20,06
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  20,06
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/flagged/photo-1565023020151-143935be7cf8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQ1fHxzcG9ydHMlMjBoZWxtZW50fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Running Wear
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    42,75
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  42,75
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/flagged/photo-1568407477318-e20ccfaa2b36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Sports T-Shirt
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    54,06
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  54,06
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                      <div
                        style={{
                          marginLeft: "10px",
                          marginTop: "20px",
                          marginRight: "10px",
                        }}
                      >
                        <div
                          style={{
                            borderTop: "2px dashed rgba(155,155,155,0.31)",
                            height: "2px",
                          }}
                        ></div>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid container style={{ margin: "5px" }}>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.5)",
                                fontWeight: "600",
                              }}
                            >
                              Summary
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Subtotal
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                45,26
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Estimated Delivery &amp; Handling
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                0.00
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Estimated Duties and Taxes
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                -
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.7)",
                                fontWeight: "600",
                              }}
                            >
                              Total
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                116.87
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginBottom: "20px", marginTop: "50px" }}>
                        <Grid container justify="center">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                backgroundColor: "#1a1a3e",
                                borderRadius: "20px",
                                padding: "10px 80px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#ffffff",
                              }}
                            >
                              Check Out
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Paper>
          <Paper style={{ padding: "20px", background: "#e0e2e4" }}>
            <Grid container>
              <Grid
                zeroMinWidth
                item
                sm={2}
                xs={2}
                lg={2}
                md={2}
                style={{
                  backgroundColor: "#ffffff",
                  borderBottomLeftRadius: "20px",
                  borderTopLeftRadius: "20px",
                }}
              >
                <div style={{ marginTop: "35px" }}>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <Avatar src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"></Avatar>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <List>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Explore"
                            style={{
                              color: "rgba(0,0,0,0.78)",
                              fontFamily: "sans-serif",
                              fontWeight: "600",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Shoes"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            disableTypography
                            primary="Clothing"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                        <ListItem button>
                          <ListItemText
                            primary="Gear"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
                <div style={{ marginTop: "380px" }}>
                  <Grid container justify="center">
                    <Grid zeroMinWidth item>
                      <List>
                        <ListItem button>
                          <ListItemText
                            primary="Log Out"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "#9b9b9b",
                              fontWeight: "100",
                            }}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid zeroMinWidth item sm={10} xs={10} lg={10} md={10}>
                <div>
                  <Grid container>
                    <Grid
                      zeroMinWidth
                      item
                      sm={12}
                      xs={12}
                      lg={8}
                      md={8}
                      style={{ backgroundColor: "#fafafa" }}
                    >
                      <div style={{ marginTop: "35px" }}>
                        <Grid
                          container
                          alignContent="center"
                          alignItems="center"
                          justify="space-around"
                          direction="row"
                        >
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  color: "rgba(0,0,0,0.78)",
                                  fontFamily: "sans-serif",
                                  fontWeight: "600",
                                }}
                              >
                                Men
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                }}
                              >
                                Women
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div>
                              <Link
                                style={{
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                }}
                              >
                                Kid&#039;s
                              </Link>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                borderRadius: "20px",
                                padding: "10px",
                                background: "#f0f0f0",
                              }}
                            >
                              <i
                                className="fas fa-search"
                                style={{
                                  marginLeft: "10px",
                                  marginRight: "10px",
                                }}
                              ></i>
                              <input
                                placeholder="Search for items"
                                style={{
                                  border: "none",
                                  outline: "none",
                                  color: "#9b9b9b",
                                  fontWeight: "100",
                                  background: "none",
                                  fontSize: "15px",
                                  fontFamily: "sans-serif",
                                  paddingRight: "10px",
                                }}
                              ></input>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px" }}>
                        <Grid container direction="row">
                          <Grid zeroMinWidth item xs={12}>
                            <img
                              src="https://images.unsplash.com/photo-1485633854337-3df7c7baed90?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwaW1hZ2VzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{ borderRadius: "10px", width: "100%" }}
                            ></img>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px", marginTop: "-160px" }}>
                        <Grid container style={{ marginLeft: "10px" }}>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h1"
                              align="justify"
                              display="block"
                              style={{
                                fontSize: "22px",
                                fontFamily: "sans-serif",
                                color: "rgba(255,255,255,0.87)",
                                fontWeight: "600",
                              }}
                            >
                              GEAR TO PLAY ALL DAY
                            </Typography>
                            <Typography
                              variant="caption"
                              align="justify"
                              display="block"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(255,255,255,0.87)",
                                fontWeight: "100",
                              }}
                            >
                              Check Out the latest Slash styles made to play{" "}
                            </Typography>
                            <div>
                              <Grid container>
                                <Grid zeroMinWidth item>
                                  <Button
                                    style={{
                                      backgroundColor: "#1a1a3e",
                                      borderRadius: "20px",
                                      padding: "5px 20px",
                                      textTransform: "none",
                                      color: "rgba(255,255,255,0.85)",
                                      fontWeight: "100",
                                      fontSize: "12px",
                                      marginTop: "10px",
                                      fontFamily: "sans-serif",
                                    }}
                                  >
                                    Shop Now
                                  </Button>
                                </Grid>
                              </Grid>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ margin: "20px", marginTop: "70px" }}>
                        <Grid container justify="space-between">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.78)",
                                fontWeight: "600",
                              }}
                            >
                              Popular Now
                            </Button>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                fontSize: "15px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#9b9b9b",
                                fontWeight: "100",
                              }}
                            >
                              View All
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginBottom: "20px", margin: "20px" }}>
                        <Grid container spacing={2}>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1604079586539-a1a1d0caf65b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ3fHxtZW4lMjB0JTIwc2hpcnQlMjBpbWFnZXN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Sports T-Shirt
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Men&#039;s Training Crew
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                45,26
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1600071177478-88758260617d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE4fHx3YXRjaGVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Men&#039;s Watch
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Hand Timer Watch{" "}
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                150,36
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1533120238546-f0d4fa4d05c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnRzJTIwYmFnJTIwd2l0aCUyMGdpcmx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Utility Girl&#039;s Bag
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Sports Bag
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                60,26
                              </Typography>
                            </div>
                          </Grid>
                          <Grid zeroMinWidth item sm={4} xs={4} lg={3} md={3}>
                            <img
                              src="https://images.unsplash.com/photo-1573318575683-dd2b389e3241?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTYzfHxzaG9lc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                              style={{
                                width: "100%",
                                borderRadius: "10px",
                                height: "160px",
                              }}
                            ></img>
                            <div>
                              <IconButton
                                size="small"
                                style={{
                                  backgroundColor: "#fafafa",
                                  marginTop: "-29px",
                                  float: "right",
                                  borderStyle: "solid",
                                }}
                              >
                                <AddOutlined fontSize="small" />
                              </IconButton>
                            </div>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                fontSize: "12px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.67)",
                                fontWeight: "600",
                              }}
                            >
                              VR Men&#039;s Shoes
                            </Typography>
                            <Typography
                              variant="h6"
                              align="left"
                              style={{
                                color: "#9b9b9b",
                                fontFamily: "sans-serif",
                                fontSize: "10px",
                              }}
                            >
                              Men&#039;s Sports Shoes
                            </Typography>
                            <div
                              style={{
                                color: "rgba(0,0,0,0.79)",
                                marginTop: "5px",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                90,86
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                    <Grid
                      zeroMinWidth
                      item
                      sm={12}
                      xs={12}
                      lg={4}
                      md={4}
                      style={{
                        backgroundColor: "#ffffff",
                        borderTopRightRadius: "20px",
                        borderBottomRightRadius: "20px",
                        paddingRight: "40px",
                      }}
                    >
                      <div style={{ marginTop: "35px", marginRight: "25px" }}>
                        <Grid container justify="flex-end">
                          <Grid zeroMinWidth item>
                            <Avatar
                              src="https://images.unsplash.com/photo-1536044635785-467d51fc5880?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTV8fHNwb3J0cyUyMHdlYXJ8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                              style={{ width: "40px", height: "40px" }}
                            ></Avatar>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid container justify="space-between">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.78)",
                                fontWeight: "600",
                                marginRight: "2px",
                              }}
                            >
                              Order List
                            </Button>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                fontSize: "12px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#9b9b9b",
                                fontWeight: "100",
                                marginRight: "2px",
                              }}
                            >
                              View All
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "35px" }}>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/photo-1519079754742-f83afaef6d35?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGJsYWNrJTIwY2FwfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Cap
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    20,06
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  20,06
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/flagged/photo-1565023020151-143935be7cf8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjQ1fHxzcG9ydHMlMjBoZWxtZW50fGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Running Wear
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    42,75
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  42,75
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div
                          style={{ borderRadius: "10px", padding: "2px 5px" }}
                        >
                          <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                            style={{
                              borderRadius: "10px",
                              padding: "5px",
                              background: "#fafafa",
                            }}
                          >
                            <Grid zeroMinWidth item xs={3}>
                              <div
                                style={{ borderRadius: "10px", padding: "2px" }}
                              >
                                <Avatar
                                  src="https://images.unsplash.com/flagged/photo-1568407477318-e20ccfaa2b36?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8c3BvcnQlMjBzaGlydHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                  style={{
                                    width: "40px",
                                    borderRadius: "10px",
                                    margin: "2px",
                                    height: "40px",
                                  }}
                                ></Avatar>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={5}>
                              <div>
                                <Typography
                                  variant="h6"
                                  align="left"
                                  style={{
                                    fontSize: "10px",
                                    fontFamily: "sans-serif",
                                    color: "rgba(0,0,0,0.68)",
                                    fontWeight: "600",
                                  }}
                                >
                                  VR Sports T-Shirt
                                </Typography>
                                <div
                                  style={{
                                    color: "#9b9b9b",
                                    marginTop: "5px",
                                    display: "flex",
                                  }}
                                >
                                  <i
                                    className="fas fa-dollar-sign"
                                    style={{ fontSize: "12px" }}
                                  ></i>
                                  <Typography
                                    variant="h6"
                                    style={{
                                      fontSize: "12px",
                                      marginTop: "-3px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    54,06
                                  </Typography>
                                </div>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div style={{ marginTop: "10px" }}>
                                <Typography
                                  variant="h6"
                                  style={{ color: "#9b9b9b", fontSize: "15px" }}
                                >
                                  x1
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item xs={2}>
                              <div
                                style={{
                                  color: "rgba(0,0,0,0.72)",
                                  marginTop: "15px",
                                  display: "flex",
                                }}
                              >
                                <i
                                  className="fas fa-dollar-sign"
                                  style={{ fontSize: "12px" }}
                                ></i>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "12px",
                                    marginTop: "-3px",
                                    fontWeight: "600",
                                  }}
                                >
                                  54,06
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                      <div
                        style={{
                          marginLeft: "10px",
                          marginTop: "20px",
                          marginRight: "10px",
                        }}
                      >
                        <div
                          style={{
                            borderTop: "2px dashed rgba(155,155,155,0.31)",
                            height: "2px",
                          }}
                        ></div>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid container style={{ margin: "5px" }}>
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.5)",
                                fontWeight: "600",
                              }}
                            >
                              Summary
                            </Typography>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Subtotal
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                45,26
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Estimated Delivery &amp; Handling
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                0.00
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                color: "#9b9b9b",
                                fontSize: "13px",
                                fontFamily: "sans-serif",
                              }}
                            >
                              Estimated Duties and Taxes
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                -
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <Grid
                          container
                          justify="space-between"
                          style={{ margin: "5px" }}
                        >
                          <Grid zeroMinWidth item>
                            <Typography
                              variant="h6"
                              style={{
                                fontSize: "15px",
                                fontFamily: "sans-serif",
                                color: "rgba(0,0,0,0.7)",
                                fontWeight: "600",
                              }}
                            >
                              Total
                            </Typography>
                          </Grid>
                          <Grid zeroMinWidth item>
                            <div
                              style={{
                                marginLeft: "-60px",
                                marginTop: "10px",
                                color: "rgba(0,0,0,0.69)",
                                display: "flex",
                              }}
                            >
                              <i
                                className="fas fa-dollar-sign"
                                style={{ fontSize: "12px" }}
                              ></i>
                              <Typography
                                variant="h6"
                                style={{
                                  fontSize: "12px",
                                  marginTop: "-3px",
                                  fontWeight: "600",
                                }}
                              >
                                116.87
                              </Typography>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginBottom: "20px", marginTop: "50px" }}>
                        <Grid container justify="center">
                          <Grid zeroMinWidth item>
                            <Button
                              style={{
                                backgroundColor: "#1a1a3e",
                                borderRadius: "20px",
                                padding: "10px 80px",
                                textTransform: "none",
                                fontFamily: "sans-serif",
                                color: "#ffffff",
                              }}
                            >
                              Check Out
                            </Button>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Hidden>
    </div>
  );
}
export default SlashsportsMatUI;