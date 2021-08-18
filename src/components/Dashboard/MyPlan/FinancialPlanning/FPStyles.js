const moduleStyles = {
  modules: {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    paddingTop: "10px",
    borderBottom: "1px solid #E5E5E5 ",
    boxShadow: "0 6px 6px -6px grey",
  },
  title: {
    display: "flex",
    alignItems: "flex-start",
  },
  paths: {
    marginLeft: "150px",
  },
  path: {
    width: "600px",
    border: "1px solid lightgrey",
  },
  cardheader: {
    borderBottom: "1px solid lightgrey",
  },
  cardactions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  actionbutton: {
    backgroundColor: "#06AD35",
    borderRadius: "30px",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#06AD35",
    },
  },
};

export default moduleStyles;
