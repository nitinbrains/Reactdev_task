import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { display } from "@material-ui/system";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getInventoryRequest } from "../redux/actions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import Services from '../components/Services'

const styles = theme => ({
  innerBox: {
    width: "45%",
    height: "447px",
    border: "1px solid blue",
    margin: "10px auto",
    backgroundColor: "#99ccff",
    borderRadius: "10px"
  },
  outerDiv: {
    width: "80%",
    height: "480px",
    border: "5px solid blue",
    margin: "0 auto",
    marginTop: "140px",
    backgroundColor: "#e0e0d1",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-evenly"
  }
});

class SingleRoom extends Component {
  componentDidMount() {
    if (this.props && this.props.getInventory) {
      this.props.getInventory();
    }
  }
  render() {
    const { classes } = this.props;
    var id = this.props.match.params.id;
   

    let roomsData = this.props.inventory_data;
    let singleItem = roomsData.filter(v => {
      return v.id == id;
    }); 

    return (
      <div>
        <Navbar />
        {singleItem.map((v, i) => {
          return (
            <div className={classes.outerDiv}>
              <div className={classes.innerBox}>
                <img
                  style={{
                    width: "100%",
                    height: "445px",
                    borderRadius: "10px"
                  }}
                  src={v.thumbnailUrl}
                />
              </div>
              <div className={classes.innerBox}>
                <div
                  style={{
                    backgroundColor: "#ffffcc",
                    margin: "7px",
                    padding:'7px',
                    borderRadius: "10px",
                    overflow:'auto'
                  }}
                >
                  <Typography style={{color:'#800000', fontWeight:'bolder'}} gutterBottom variant="h5" component="h2">
                    {v.title}
                  </Typography>
                  {v.description}
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <div>
                    <List component="nav" aria-label="contacts">
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Rent Per Month: ${v.price}`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary={`Customer Rating: ${v.rating}`} />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pets are Allowed" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Semi-Furnished" />
                      </ListItem>
                    </List>
                  </div>
                  <div>
                    <List component="nav" aria-label="contacts">
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Wifi Available" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="24/7 Electricity" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Security Cameras" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Club Membership" />
                      </ListItem>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div style={{marginTop:'35px'}}>
           <Services/>
           </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inventory_data: state.inventorydetails.inventorydata.data
});
const mapDispatchToProps = dispatch => ({
  getInventory: () => dispatch(getInventoryRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(SingleRoom));
