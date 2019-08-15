import React, { Component } from "react";
import {Route, Switch, BrowserRouter as Router, Link} from 'react-router-dom'
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import SingleRoom from './SingleRoom'

import { connect } from "react-redux";
import { getInventoryRequest } from "../redux/actions";

import StarRatings from "react-star-ratings";
import InputRange from "react-input-range";

import { withStyles } from "@material-ui/core/styles";


import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "../../node_modules/react-input-range/src/scss/index.scss";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  button: {
    margin: theme.spacing(1)
  },
  filters: {
    width: "415px",
    height: "200px",
    backgroundColor: "#3366ff",
    border: "5px solid green",
    opacity: "0.8",
    borderRadius: "10px"
  },
  InputRangeWrap: {
    width: "70%",
    margin: "0 auto",
    marginTop: "30px",
    marginBottom: "30px",
    display: "flex",
    justifyContent: "center"
  }
});

class Rooms extends Component {
  state = {
    rating: 4,
    range1: "10000",
    filters:false
  };
  componentDidMount() {
    if (this.props && this.props.getInventory) {
      this.props.getInventory();
    }
  }

  ChangeRating(value) {
    this.setState({
      rating: value
    });
  }

  applyFilters=()=>{
     this.setState({filters:true})
  }

  resetFilters=()=>{
    this.setState({filters:false})
  }

  render() {
    const { classes } = this.props;
    const {rating, range1}=this.state;
    let roomsData = this.props.inventory_data;
    let filteredData=roomsData.filter(v=> v.price <= range1 && v.rating==rating)
    
    
    return (
  
      <div>
        <Navbar />
        <Hero hero="roomsHero">
          <div className={classes.filters}>
            <p
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bolder",
                fontSize: "20px",
                backgroundColor:'white',
                margin:'10px',
                borderRadius:'10px',
                border:'1px solid black',
                display:'flex',
                justifyContent:'center'
              }}
            >
            
              Filter By Rating And Price
            </p>
            <div className="flex-center">
              <StarRatings
                rating={this.state.rating}
                starRatedColor="#FF9933"
                starHoverColor="#f28531"
                changeRating={value => this.ChangeRating(value)}
                numberOfStars={5}
                name="rating"
              />
            </div>

            <div className={classes.InputRangeWrap}>
              <InputRange
                maxValue={25000}
                minValue={9000}
                step={5000}
                value={this.state.range1}
                classNames={{
                  activeTrack:
                    "input-range__track input-range__track--active my-slider-track",
                  disabledInputRange: "input-range input-range--disabled",
                  inputRange: "input-range",
                  labelContainer: "input-range__label-container",
                  maxLabel: "input-range__label input-range__label--max",
                  minLabel: "input-range__label input-range__label--min",
                  slider: "input-range__slider my-slider",
                  sliderContainer: "input-range__slider-container",
                  track: "input-range__track input-range__track--background",
                  valueLabel: "input-range__label input-range__label--value"
                }}
                onChange={range1 => this.setState({ range1 })}
              />
              
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <Button onClick={this.applyFilters} style={{margin:'5px', top:'20px'}} variant="contained" color="primary">
        Apply Filters
      </Button>
      <Button onClick={this.resetFilters} style={{margin:'5px', top:'20px'}} variant="contained" color="secondary">
        Reset Filters
      </Button>
      </div>
          </div>
          
        </Hero>

        <div className="grid-container">

          {this.state.filters ? filteredData.map((v, i) => {
            return (
              <div
                class="grid-item"
                key={i}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={v.thumbnailUrl}
                      title={v.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {v.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {v.description.substr(0, 102)}....
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Typography variant="h6">
                      Price : &#8377; {v.price}
                    </Typography>
                    <Typography variant="h6">Rating : {v.rating}</Typography>
                  </CardActions>
                  <Link style={{textDecoration:'none'}}to={`/singleroom/${v.id}`}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                  >
                    Show Property Details
                  </Button>
                  </Link>
                </Card>
              </div>
            )
          })
          :
          roomsData.map((v, i) => {
            return (
              <div
                class="grid-item"
                key={i}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={v.thumbnailUrl}
                      title={v.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {v.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {v.description.substr(0, 102)}....
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <Typography variant="h6">
                      Price : &#8377; {v.price}
                    </Typography>
                    <Typography variant="h6">Rating : {v.rating}</Typography>
                  </CardActions>
                  <Link style={{textDecoration:'none'}}to={`/singleroom/${v.id}`}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                  >
                    Show Property Details
                  </Button>
                  </Link>
                </Card>
              </div>
            )
          })
          }
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
)(withStyles(styles, { withTheme: true })(Rooms));
