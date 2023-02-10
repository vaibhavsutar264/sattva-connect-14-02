import React, { Component } from "react";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import SimpleReactValidator from "simple-react-validator";
import { InfiniteScroll } from "react-simple-infinite-scroll";
import { Multiselect } from "multiselect-react-dropdown";
import {
  apiRoute,
  getApiHeader,
  getUserId,
  getLocalStorageAuth,
} from "../../utils/helpers";
import VideoServices from "../../services/videoServices";
import VideoDetails from "../../components/user/VideoDetails";
import Layout from "../../components/user/Layout";
import { SearchContext } from "./ContextSearch";
import styles from "../../components/user/searchcomponent.module.css";

export default class SearchComponent extends Component {
  static contextType = SearchContext;

  constructor(props) {
    super(props);
    this.multiselectRef = React.createRef();
    this.state = {
      dataToVideos:[],
      mainVideoCollection:[],
      allVideosCollection:[],
      videos: [],
      teachers: [],
      styleType: [],
      intentions: [],
      styles: [],
      searchInput: "",
      duration: "",
      durationStart: "",
      selectedTeacher: "",
      selectedStyle: "",
      selectedStyleType: "",
      selectedTeacherText: "",
      selectedStyleText: "",
      selectedStyleTypeText: "",
      selectedIntention: [],
      selectedIntentionType: [],
      searchInputOptions: [],
      showFilterForm: false,
      showStyle: false,
      accessDetails: {},
      teacherExclusive: false,
      loading: true,
      hasMore: true,
      cursor: 0,
      totalCount: 0,
      surprisemeVideo: "",
      showVideos: false,
      allVideosKeys:[],
      showTypesFilters: true
    };
    this.searchValidation = new SimpleReactValidator();
    this.onChange = this.onChange.bind(this);
    this.videosFMindful = this.videosFMindful.bind(this);
    this.videosFFindEase = this.videosFFindEase.bind(this);
    this.videosFDeepestRest = this.videosFDeepestRest.bind(this);
    this.videosFPeacefulMinds = this.videosFPeacefulMinds.bind(this);
    this.videosFLiveWholly = this.videosFLiveWholly.bind(this);
    this.videosFAwakenShakti = this.videosFAwakenShakti.bind(this);
    this.videosFBreathe = this.videosFBreathe.bind(this);
    this.videosFSacredSound = this.videosFSacredSound.bind(this);
    this.videosFIlluminate = this.videosFIlluminate.bind(this);
    this.videosFSya = this.videosFSya.bind(this);
    this.toggleFilterForm = this.toggleFilterForm.bind(this);
    this.handleSearchForm = this.handleSearchForm.bind(this);
    this.clearAllCollectionFilter = this.clearAllCollectionFilter.bind(this);
    // this.allCollection = this.allCollection.bind(this);
  }
  fetchSearchVideos = (data, videos) => {
    this.setState({ loading: true });
    VideoServices.fetchSearchVideos(data).then((res) => {
      let allVideos = [...videos, ...res.data.videos];
      this.setState({
        videos: allVideos,
        loading: false,
        cursor: res.data.cursor,
        hasMore: res.data.hasMore,
        totalCount: res.data.totalCount,
      });
      console.log(this.state.videos);
    });
  };

  // async allCollection = () => {
  //   await axios
  //   .get(apiRoute("user-dashboard/get-video-collection-data"), requestOptions)
  //   .then((res) => {
  //     this.setState({ teachers: res.data });
  //   });
  // }
  componentDidMount() {
    // let {si,st} = this.context;
    let {
      si,
      cFstyle,
      cFstyle2,
      cFilterForm,
      cFteacher,
      cFduration,
      cFdurationStart,
      cFintentions,
      cFstyleId,
      cFteacherId,
      cFstyleId2,
      cShowStyle,
      cFintentionsId,
    } = this.context;
    window.scrollTo(0, 0);

    const requestOptions = {
      headers: getApiHeader(true),
    };



    axios
      .get(apiRoute("get-video-collection-data"), requestOptions)
      .then((res) => {
        delete res.data.live_studio
        const dataFromApi = res.data
        this.setState({ allVideosKeys:[...Object.keys(dataFromApi)],mainVideoCollection:dataFromApi });
        console.log(this.state.allVideosCollection);
        console.log(this.state.allVideosKeys);
      });
    axios
      .get(apiRoute("user-dashboard/get-all-video-teacher"), requestOptions)
      .then((res) => {
        this.setState({ teachers: res.data });
      });
    axios
      .get(apiRoute("user-dashboard/get-all-videos-style"), requestOptions)
      .then((res) => {
        this.setState({ styleType: res.data });
      });
    axios
      .get(apiRoute("user-dashboard/get-all-videos-intention"), requestOptions)
      .then((res) => {
        this.setState({ intentions: res.data });
      });
    if (this.props.exclusive !== undefined) {
      var isteacherExclusive = true;
    } else {
      var isteacherExclusive = false;
    }
    if (this.props.style !== undefined) {
      console.log("first cond");
      this.setState({
        selectedStyleType: this.props.style,
        showFilterForm: true,
        showStyle: true,
      });
      const details = {
        searchInput: "",
        duration: "",
        durationStart: "",
        teacher: "",
        styleType: this.props.style,
        // styleType: cFstyleId,
        intentionType: [],
        style: cFstyleId2,
        // style: '',
        teacherExclusive: false,
        limit: 40,
        skip: 0,
      };
      const stateValues = this.state;
      stateValues.selectedStyleType = this.props.style;
      stateValues.showFilterForm = true;
      stateValues.showStyle = true;

      axios
        .get(
          apiRoute("user-dashboard/get-styles/" + this.props.style),
          requestOptions
        )
        .then((res) => {
          this.setState({ styles: res.data });
          stateValues.styles = res.data;
        });

      this.fetchSearchVideos(details, [], stateValues);
    } else {
      console.log("last cond");
      this.setState({
        teacherExclusive: isteacherExclusive,
      });
      if (this.state.videos.length == 0) {
        let { si, st } = this.context;

        const details = {
          searchInput: si,
          duration: cFduration,
          durationStart: cFdurationStart,
          // teacher: this.state.selectedTeacher,
          // styleType: this.state.selectedStyleType,
          // intentionType: this.state.selectedIntention,
          // style: this.state.selectedStyle,
          teacher: cFteacherId,
          styleType: cFstyleId,
          intentionType: cFintentionsId,
          style: cFstyleId2,
          teacherExclusive: isteacherExclusive,
          limit: 40,
          skip: 0,
        };
        this.fetchSearchVideos(details, []);
      }
    }
    const auth = getLocalStorageAuth();
    if (auth) {
      const userId = auth.userDetails.id;
      axios
        .get(apiRoute("get-teacher-access/" + btoa(userId)), requestOptions)
        .then((res) => {
          this.setState({ accessDetails: res.data });
        });
    }
  }

  
  filterData = () => {
    const requestOptions = {
      headers: getApiHeader(true),
    };
    let {
      si,
      cFstyle,
      cFstyle2,
      cFilterForm,
      cFteacher,
      cFduration,
      cFintentions,
      cFstyleId,
      cFteacherId,
      cFstyleId2,
      cFdurationStart,
      cFintentionsId,
    } = this.context;
    // let {si,st} = this.context;
    const details = {
      searchInput: si,
      // duration: this.state.duration,
      // durationStart: this.state.durationStart,
      // teacher: this.state.selectedTeacher,
      // styleType: this.state.selectedStyleType,
      // intentionType: this.state.selectedIntention,
      // style: this.state.selectedStyle,
      duration: cFduration,
      durationStart: cFdurationStart,
      teacher: cFteacherId,
      styleType: cFstyleId,
      intentionType: cFintentionsId,
      style: cFstyleId2,
      teacherExclusive: this.state.teacherExclusive,
      limit: 40,
      skip: 0,
    };
    this.fetchSearchVideos(details, [], this.state);
  };

  onSelect = (selectedList, selectedItem) => {
    let { changeFintentions, changeFintentionsId } = this.context;
    const selectedIds = [];
    selectedList.forEach((e) => {
      selectedIds.push(e.id);
    });
    this.setState({
      selectedIntention: selectedIds,
      selectedIntentionType: selectedList,
    });
    changeFintentions(selectedList);
    changeFintentionsId(selectedIds);
    setTimeout(() => {
      this.filterData();
    }, 5);
  };

  onRemove = (selectedList, removedItem) => {
    let { changeFintentions, changeFintentionsId } = this.context;
    const selectedIds = [];
    selectedList.forEach((e) => {
      selectedIds.push(e.id);
    });
    // console.log(selectedIds);
    var index = selectedIds.indexOf(removedItem);
    if (index > -1) {
      selectedIds.splice(index, 1);
    }
    console.log(selectedIds);
    this.setState({ selectedIntention: selectedIds });
    changeFintentionsId(selectedIds);
    changeFintentions(selectedList);
    setTimeout(() => {
      this.filterData();
    }, 5);
  };

  onChange(e) {
    console.log(e.target.name);
    let {
      changeFstyle,
      changeFstyle2,
      changeFteacher,
      changeFstyleId,
      changeFteacherId,
      cFstyleId,
      changeFstyleId2,
      changeShowStyle,
      changeStylesData,
    } = this.context;
    // let {setStyle,setTeacher,setDuration,setIntentions} = this.context;

    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const selectedName = optionElement.getAttribute("itemName");

    this.setState({ [e.target.name]: e.target.value });

    setTimeout(() => {
      this.filterData();
    }, 5);

    if (e.target.name === "selectedStyleType") {
      if (e.target.value !== "") {
        this.setState({
          showStyle: true,
          selectedStyle: "",
          selectedStyleTypeText: selectedName,
        });
        changeFstyle(selectedName);
        console.log(changeFstyle(selectedName));
        changeFstyleId(e.target.value);
        console.log(changeFstyle(selectedName));
        changeShowStyle(true);
        changeFstyleId2("");
        const requestOptions = {
          headers: getApiHeader(true),
        };
        axios
          .get(
            apiRoute("user-dashboard/get-styles/" + e.target.value),
            requestOptions
          )
          .then((res) => {
            this.setState({ styles: res.data });
            changeStylesData(res.data);
          });
      } else {
        this.setState({
          showStyle: false,
          styles: [],
          selectedStyle: "",
          selectedStyleTypeText: "",
        });
      }
    }
    if (e.target.name === "selectedStyle") {
      if (e.target.value !== "") {
        this.setState({ selectedStyleText: selectedName });
        // setStyle(selectedName);
        changeFstyle2(selectedName);
        changeFstyleId2(e.target.value);
      } else {
        this.setState({ selectedStyleText: "" });
      }
    }
    if (e.target.name === "selectedTeacher") {
      if (e.target.value !== "") {
        this.setState({ selectedTeacherText: selectedName });
        changeFteacher(selectedName);
        changeFteacherId(e.target.value);
      } else {
        this.setState({ selectedTeacherText: "" });
        changeFteacher("");
      }
    }
  }

  onDurationChange = (e) => {
    let { changeFduration, changeFdurationStart } = this.context;
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index];
    const durationStart = optionElement.getAttribute("fromVal");
    this.setState({ duration: e.target.value });
    changeFduration(e.target.value);
    changeFdurationStart(durationStart);
    this.setState({ durationStart: durationStart });
    setTimeout(() => {
      this.filterData();
    }, 8);
  };

  handleSearchForm(e) {
    e.preventDefault();
    if (!this.searchValidation.allValid()) {
      this.searchValidation.showMessages();
      this.forceUpdate();
      return false;
    }
    this.setState({ searchInputOptions: [] });
    this.filterData();
  }

  toggleFilterForm() {
    let { changeFilterForm } = this.context;
    this.setState({ showFilterForm: !this.state.showFilterForm });
    changeFilterForm(!this.state.showFilterForm);
  }

  changeFinterInput = (e) => {
    let { si, st } = this.context;
    st(e.target.value);

    // this.setState({ searchInput: e.target.value });
    if (e.target.value == "") {
      setTimeout(() => {
        this.filterData();
      }, 10);
    }
  };

  handleSearchOptiopnClick = (e) => {
    let { si, st } = this.context;
    st(e.target.innerHTML);
    this.setState({ searchInputOptions: [] });
  };

  clearAllFilter = (e) => {
    // let {si,st} = this.context;
    let {
      changeFteacher,
      st,
      changeFstyle,
      changeFstyle2,
      changeFintentions,
      changeFduration,
      changeFstyleId,
      changeFteacherId,
      changeShowStyle,
    } = this.context;
    st("");
    changeFteacher("");
    changeFstyle2("");
    changeFstyle("");
    changeFintentions("");
    changeFduration("");
    changeFstyleId("");
    changeFteacherId("");
    changeShowStyle(false);
    this.setState({
      searchInput: "",
      duration: "",
      durationStart: "",
      selectedTeacher: "",
      selectedStyleType: "",
      selectedTeacherText: "",
      selectedStyleText: "",
      selectedStyleTypeText: "",
      selectedIntention: [],
      selectedStyle: "",
      selectedIntentionType: [],
      allVideosCollection: []
    });
    // if (this.state.selectedIntention.length > 0) {
    //   this.multiselectRef.current.resetSelectedValues();
    // }
    setTimeout(() => {
      this.filterData();
    }, 5);
  };
  clearAllIntentions = (e) => {
    // let {si,st} = this.context;
    let {
      changeFteacher,
      st,
      changeFstyle,
      changeFstyle2,
      changeFintentions,
      changeFduration,
      changeFstyleId,
      changeFteacherId,
      changeShowStyle,
    } = this.context;

    changeFintentions("");
    
    this.setState({
      selectedIntention: [],
      selectedIntentionType: [],
    });
    // if (this.state.selectedIntention.length > 0) {
    //   this.multiselectRef.current.resetSelectedValues();
    // }
    setTimeout(() => {
      this.filterData();
    }, 5);
  };
  clearAllCollectionFilter = ()=>{
    this.setState({
      showTypesFilters: true,
      allVideosCollection: [],
    });
  }
  loadMore = () => {
    let { si, st } = this.context;

    const details = {
      searchInput: si,
      duration: this.state.duration,
      durationStart: this.state.durationStart,
      teacher: this.state.selectedTeacher,
      styleType: this.state.selectedStyleType,
      intentionType: this.state.selectedIntention,
      style: this.state.selectedStyle,
      teacherExclusive: this.state.teacherExclusive,
      limit: 40,
      skip: this.state.cursor,
    };
    this.fetchSearchVideos(details, this.state.videos);
  };

  removeStyle = (e) => {
    let { changeFstyle2 } = this.context;
    this.setState({ selectedStyle: "", selectedStyleText: "" });
    changeFstyle2("");
    setTimeout(() => {
      this.filterData();
    }, 8);
  };

  removeStyleType = (e) => {
    let { changeFstyle, changeFstyleId, changeShowStyle } = this.context;
    this.setState({ selectedStyleType: "", selectedStyleTypeText: "" });
    changeFstyle("");
    changeFstyleId("");
    changeShowStyle(false);
    setTimeout(() => {
      this.filterData();
    }, 8);
  };

  removeTeacther = (e) => {
    let { changeFteacher, changeFteacherId } = this.context;
    this.setState({ selectedTeacher: "", selectedTeacherText: "" });
    changeFteacher("");
    changeFteacherId("");
    setTimeout(() => {
      this.filterData();
    }, 8);
  };

  teacherExclusiveVideos = (e) => {
    this.setState({
      teacherExclusive: !this.state.teacherExclusive,
    });
    setTimeout(() => {
      this.filterData();
    }, 8);
  };
  surpriseMe = () => {
    const requestOptions = { headers: getApiHeader(true) };
    axios.get(apiRoute("get-surprise-me", requestOptions)).then((res) => {
      // this.setState({ surprisemeVideo: "https:\/\/player.vimeo.com\/video\/278730789?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=129872" });
      this.setState({ surprisemeVideo: res.data });
    });
  };
  videosFMindful = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("mindful_movements"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFFindEase = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("find_ease"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFDeepestRest = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("deepest_rest"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFPeacefulMinds = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("peaceful_minds"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFLiveWholly = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("live_wholly"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFAwakenShakti = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("awaken_shakti"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFBreathe = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("breathe"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFSacredSound = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("sacred_Sound"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFIlluminate = ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("Illuminate"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  videosFSya= ()=>{
    const names = Object.keys(this.state.mainVideoCollection)
    .filter((key) => key.includes("sya"))
    .reduce((obj, key) => {
        return Object.assign(obj, {
          [key]: this.state.mainVideoCollection[key]
        });
  }, {});
  console.log(names);
  this.setState({
    showTypesFilters: false,
    videos:[],
    allVideosCollection: names,
  });
  }
  
  render() {
    let {
      si,
      cFstyle,
      cFstyle2,
      cFilterForm,
      cFteacher,
      cFduration,
      cFdurationStart,
      cFintentions,
      cFstyleId,
      cFteacherId,
      cFstyleId2,
      cShowStyle,
      cStylesData,
      cFintentionsId,
    } = this.context;
    // let {si,style,teacher,duration,intentions} = this.context;
    setTimeout(() => {
      
      console.log(this.state.videos);
      console.log(cFstyleId);
    }, 9000);
    return (
      <Layout loading={this.state.loading}>
        <main className="admin-content light-purplebg">
          <section
            className="inner-banner mb-0 mob-min-height-80vw"
            style={{
              background: "url(/../images/bg-connect.jpg)",
              backgroundSize: "cover",
            }}
          >
            <div className="row d-none-mob" style={{ width: "100%" }}>
              <div
                className="col-md-8 pl-0 pr-0 bannner-box"
                style={{ height: "600px" }}
              >
                <img
                  className="grid-image"
                  src="../../images/search-grid.jpeg"
                  alt=""
                />
              </div>
              <div className="col-md-4 pl-0 pr-0" style={{ height: "600px" }}>
                <div style={{ height: "300px", width: "100%" }}>
                  <img className="grid-image" src="../../images/1.png" alt="" />
                </div>
                <div style={{ height: "300px", width: "100%" }}>
                  <img
                    className="grid-image"
                    src="../../images/anand-teaching.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="abs-center">
              <div className="text-center text-white">
                <h1 className="revamp-signature-heading mb-0">Yoga Library </h1>
                <p className="revamp-banner-para w-auto">
                  Where You Find All Your Practice Essentials
                </p>
              </div>
            </div>
          </section>
          <section className="sec sec-inabout bg-white">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="revamp-para">
                    Browse our 1000+ classes on all aspects of Yoga – Asana,
                    Pranayama, Kriya, Mantra, Meditation, Wisdom and more. Yogic
                    wisdom and technologies to elevate your consciousness and
                    transform your life. New classes uploaded weekly. Yoga where
                    you are!
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="sec pt-4">
            <div className="blog_outer login_blog">
              <div className="row">
                <div className="col-md-8 pl-50">
                  <div className="searchbar flex-dir d-flex align-items-center">
                    <form
                      onSubmit={this.handleSearchForm}
                      className="searchbar-bar d-flex"
                    >
                      <div className="searchbar-form-alt">
                        <input
                          type="text"
                          placeholder="Find your class"
                          autoComplete="off"
                          name="searchInput"
                          value={si}
                          onChange={this.changeFinterInput}
                          className="flex-1 search-input"
                        />
                        <button
                          className="btn btn-sm mr-2 m-mb-2"
                          type="submit"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                    <button
                      onClick={this.surpriseMe}
                      class="btn btn-sm mw-150 desk-ml-4"
                      data-toggle="modal"
                      data-target="#surpriseme"
                    >
                      Surprise Me
                    </button>
                    <div
                      class="modal fade"
                      id="surpriseme"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="testimonial2Title"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-lg modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-body">
                            <button
                              className="btn-floating btn-sm btn-filter ml-3 modal-close"
                              type="button"
                              data-dismiss="modal"
                              aria-label="close"
                            >
                              <i class="fas fa-times"></i>
                            </button>
                            <iframe
                              className="ifmplayer"
                              src={this.state.surprisemeVideo.video_url}
                              frameborder="0"
                              width="100%"
                              height="400"
                            ></iframe>
                            <h5 class="my-3">
                              {this.state.surprisemeVideo.title}
                            </h5>
                            <div
                              className="surprise-indendation"
                              dangerouslySetInnerHTML={{
                                __html: this.state.surprisemeVideo.description,
                              }}
                            />
                            <a
                              className="btn btn-sm mt-2"
                              href={
                                "/user/video-details/" +
                                this.state.surprisemeVideo.id
                              }
                            >
                              <span>Go to video page</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.showTypesFilters ? <><div className="col-md-12 mt-5 pl-50">
                  <h4 className="revamp-subtitle">Browse by filters</h4>
                </div>
                <div className="col-md-12 pl-50 d-flex f-dir align-items-center">
                  <div className="input-field revamp-filter-btn col-md-2 mr-4">
                    <select
                      name="selectedStyleType"
                      onChange={this.onChange}
                      value={cFstyleId}
                    >
                      <option value="">Style</option>
                      {this.state.styleType.map((item, index) => {
                        return (
                          <option
                            itemName={item.type}
                            value={item.id}
                            selected={cFstyleId == item.id ? "selected" : ""}
                          >
                            {item.type}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  {cShowStyle && (
                    <div className="input-field revamp-filter-btn col-md-2 mr-4">
                      <select
                        name="selectedStyle"
                        onChange={this.onChange}
                        value={cFstyleId2}
                      >
                        <option value="">Select Class</option>
                        {cStylesData.map((item, index) => {
                          return (
                            <option
                              itemName={item.name}
                              value={item.id}
                              selected={cFstyleId2 == item.id ? "selected" : ""}
                            >
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  )}
                  <div className="input-field revamp-filter-btn col-md-2 mr-4">
                    <select
                      name="selectedTeacher"
                      onChange={this.onChange}
                      value={cFteacherId}
                    >
                      <option value="" selected>
                        Select Teacher
                      </option>
                      {this.state.teachers.map((item, index) => {
                        return (
                          <option
                            itemName={item.name}
                            value={item.id}
                            selected={cFteacherId == item.id ? "selected" : ""}
                          >
                            {item.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="input-field revamp-filter-btn col-md-2 mr-4">
                    <select
                      name="duration"
                      value={cFduration}
                      onChange={this.onDurationChange}
                    >
                      <option value="" selected>
                        Duration
                      </option>
                      <option fromVal={0} value={300}>
                        5 Minutes
                      </option>
                      <option fromVal={300} value={600}>
                        10 Minutes
                      </option>
                      <option fromVal={600} value={900}>
                        15 Minutes
                      </option>
                      <option fromVal={900} value={1200}>
                        20 Minutes
                      </option>
                      <option fromVal={1200} value={1800}>
                        30 Minutes
                      </option>
                      <option fromVal={1800} value={2700}>
                        45 Minutes
                      </option>
                      <option fromVal={2700} value={3600}>
                        60 Minutes
                      </option>
                      <option fromVal={3600} value={4500}>
                        75 Minutes
                      </option>
                      <option fromVal={4500} value={5400}>
                        90 Minutes
                      </option>
                      <option fromVal={5400} value={7200}>
                        2 Hours
                      </option>
                    </select>
                  </div>
                  <div className="input-field revamp-filter-btn col-md-2  ">
                    <button
                      className="btn btn-sm btn-filter mb-4 ml-3"
                      type="button"
                      onClick={this.clearAllFilter}
                      data-html={true}
                      data-for="custom-color-no-arrow"
                      data-tip="Clear all filters"
                    >
                      Clear Filter
                    </button>
                    <ReactTooltip
                      id="custom-color-no-arrow"
                      className="react-tooltip"
                      delayHide={1000}
                      textColor="#FFF"
                      backgroundColor="#000"
                      effect="solid"
                    />
                  </div>
                </div>
                <div className="col-md-12 mt-5 pl-50">
                  <h4 className="revamp-subtitle">Browse by Intentions</h4>
                </div>
                <div className="col-md-12 pl-50 d-flex f-dir align-items-center">
                  <div className="input-field revamp-filter-btn col-md-2  mr-4">
                    {this.state.intentions.length > 0 ? (
                      <Multiselect
                        options={this.state.intentions}
                        onSelect={this.onSelect}
                        onRemove={this.onRemove}
                        selectedValues={cFintentions}
                        displayValue="name"
                        placeholder="Select Intentions"
                      />
                    ) : null}
                  </div>
                </div></> : ''}
                <div className=" col-md-12 pl-50 class-block my-0 border-0 h-160">
                  {/* Cards Design */}
                  <div className="row">
                    <div className="col-md-12 mt-5">
                      <h4 className="revamp-subtitle">
                        Browse by Collections
                      </h4>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFMindful} className="quote-writer-text black-text text-center mb-3">
                          Mindful Movements
                        </h1>
                        <p className={styles.flow}>Vinyasa flow</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFFindEase} className="quote-writer-text black-text text-center mb-3">
                          Find Ease
                        </h1>
                        <p className={styles.flow}>
                          Restorative & Sattva Yin
                        </p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFDeepestRest} className="quote-writer-text black-text text-center mb-3">
                          Deepest Rest
                        </h1>
                        <p className={styles.flow}>Yoga Nidra</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFPeacefulMinds} className="quote-writer-text black-text text-center mb-3">
                          Peaceful Minds
                        </h1>
                        <p className={styles.flow}>Meditation</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFLiveWholly} className="quote-writer-text black-text text-center mb-3">
                          Live Wholly
                        </h1>
                        <p className={styles.flow}>Integrative Practice</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFAwakenShakti} className="quote-writer-text black-text text-center mb-3">
                          Awaken Shakti
                        </h1>
                        <p className={styles.flow}>Himalayan Kundalini</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFBreathe} className="quote-writer-text black-text text-center mb-3">
                          Breathe
                        </h1>
                        <p className={styles.flow}>Pranayama</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFSacredSound} className="quote-writer-text black-text text-center mb-3">
                          Sacred Sound
                        </h1>
                        <p className={styles.flow}>Mantra</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFIlluminate} className="quote-writer-text black-text text-center mb-3">
                          Illuminate
                        </h1>
                        <p className={styles.flow}>Wisdom</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 className="quote-writer-text black-text text-center mb-3">
                          Live Studio
                        </h1>
                        <p className={styles.flow}>Recorded Live Classes</p>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div
                        className={styles.searchcards}
                      >
                        <h1 onClick={this.videosFSya}className="quote-writer-text black-text text-center mb-3">
                          SYA
                        </h1>
                        <p className={styles.flow}>Sattva Yoga Academy</p>
                      </div>
                    </div>
                    <div className="input-field revamp-filter-btn col-md-2  ">
                    <button
                      className="btn btn-sm btn-filter mb-4 ml-3"
                      type="button"
                      onClick={this.clearAllCollectionFilter}
                      data-html={true}
                      data-for="custom-color-no-arrow"
                      data-tip="Clear all filters"
                    >
                      Clear Collection Filter
                    </button>
                    <ReactTooltip
                      id="custom-color-no-arrow"
                      className="react-tooltip"
                      delayHide={1000}
                      textColor="#FFF"
                      backgroundColor="#000"
                      effect="solid"
                    />
                  </div>
                  </div>
                  {/* Cards Design End */}
                  <h4 className="revamp-subtitle mt-3 mb-0">Search result</h4>
                  <div className>
                    <h4 className="vid_stat_cnt">
                      <span id="total_rec">{this.state.totalCount}</span> Videos
                    </h4>
                  </div>

                  <InfiniteScroll
                    throttle={100}
                    threshold={300}
                    isLoading={this.state.loading}
                    hasMore={this.state.hasMore}
                    onLoadMore={this.loadMore}
                  >
                    <div className="row serchVideos">
                    {this.state.videos.map((item, index) => {
                        return <VideoDetails item={item} key={item.id} />;
                      })}
                    {/* {Object.keys([...Object.keys(this.state.allVideosCollection)]).map((i,ind)=>{ */}
                    {this.state.allVideosCollection.mindful_movements && this.state.allVideosCollection.mindful_movements.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.find_ease && this.state.allVideosCollection.find_ease.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.deepest_rest && this.state.allVideosCollection.deepest_rest.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.peaceful_minds && this.state.allVideosCollection.peaceful_minds.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.live_wholly && this.state.allVideosCollection.live_wholly.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.awaken_shakti && this.state.allVideosCollection.awaken_shakti.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.breathe && this.state.allVideosCollection.breathe.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.sacred_Sound && this.state.allVideosCollection.sacred_Sound.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.Illuminate && this.state.allVideosCollection.Illuminate.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {this.state.allVideosCollection.sya && this.state.allVideosCollection.sya.map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      }
                        {/* {this.state.allVideosCollection.mindful_movements && this.state.allVideosCollection[this.state.allVideosKeys[10] && this.state.allVideosKeys[10]].map((item, index) => {
                          return <VideoDetails item={item} key={item.id} />;
                        })
                      } */}
                    </div>
                  </InfiniteScroll>
                  <div className="row serchVideos">
                      
                    </div>
                  {this.state.videos.length > 0 ? null : (
                    <div className="card-panel text-center sattva-error">
                      <p>No videos found, please try again later, Thank you</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}
