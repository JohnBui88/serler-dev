/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import DatePicker from "react-datepicker";
import YearPicker from "react-year-picker";
import "react-datepicker/dist/react-datepicker.css";
import M from "materialize-css";
import "./Home.css";
import Header from "../commons/Header";
import Footer from "../commons/Footer";
import { getDataByCondition } from "../../actions/home.action";

class Home extends Component {
  constructor(props) {
    super(props);
    //Declare and set default values for state
    this.state = {
      type: "keywords", // keywords - filters
      search: "",
      from: new Date(),
      to: new Date(),
      checkBox: {
        analyst: true,
        author: false,
        doi: false,
        participants: false,
        researchQuestion: true,
        researchResult: false,
        seMethod: true,
        seMethodology: true,
        title: true,
        type: true
      },
      field: [
        {
          id: 1,
          name: "Author"
        },
        {
          id: 2,
          name: "DOI"
        },
        {
          id: 3,
          name: "SE Method",
          option: [
            { name: "BDD", value: "seMtd01" },
            { name: "Burn down charts", value: "seMtd02" },
            { name: "Code sharing", value: "seMtd03" },
            { name: "Continuous integration", value: "seMtd04" },
            { name: "Daily standup", value: "seMtd05" },
            { name: "Meeting", value: "seMtd06" },
            { name: "Pair programming", value: "seMtd07" },
            { name: "Planning poker", value: "seMtd08" },
            { name: "Requirements prioritisation", value: "seMtd09" },
            { name: "Restrospectives", value: "seMtd10" },
            { name: "Storyboards", value: "seMtd11" },
            { name: "TDD", value: "seMtd12" },
            { name: "User story mapping", value: "seMtd13" },
            { name: "Version control", value: "seMtd14" }
          ]
        },
        {
          id: 4,
          name: "SE Methodology",
          option: [
            { name: "Agile", value: "seMty01" },
            { name: "Aspect Oriented Development", value: "seMty02" },
            { name: "Clean Room", value: "seMty03" },
            { name: "Cloud computing", value: "seMty04" },
            { name: "Crystal", value: "seMty05" },
            { name: "Domain Driven Development", value: "seMty06" },
            { name: "Feature Driven Development", value: "seMty07" },
            { name: "Formal methods", value: "seMty08" },
            { name: "Model Driven Development", value: "seMty09" },
            { name: "Problem Driven Development", value: "seMty10" },
            { name: "Product Driven Development", value: "seMty11" },
            { name: "Scrum", value: "seMty12" },
            { name: "Service Oriented Development", value: "seMty13" },
            { name: "Spiral Rational Unified Process", value: "seMty14" },
            { name: "Values Driven Development", value: "seMty15" },
            { name: "Waterfall", value: "seMty16" },
            { name: "XP", value: "seMty17" }
          ]
        },
        {
          id: 5,
          name: "Title"
        },
        {
          id: 6,
          name: "Type",
          option: [
            { name: "Article", value: "typ01" },
            { name: "Book", value: "typ02" },
            { name: "Master thesis", value: "typ03" },
            { name: "Misc", value: "typ04" },
            { name: "Phd thesis", value: "typ05" }
          ]
        }
      ],

      // Each condition row contains 4 elements: syntax, field, field value
      conditions: [
        {
          syntax: "AND", // AND - OR - OR NOT
          field: 1, // ID của field
          operator: "Equal to", // Equal to - Not Equal to
          value: "" // field's value
        }
      ]
    };
  }

  // ------------------ Start to render the page -------------------
  componentDidMount() {
    M.AutoInit();
    document
      .getElementById("tableSection")
      .addEventListener("contextmenu", function(event) {
        event.preventDefault();
        console.log("right click table");
        M.Modal.init(document.getElementById("modalCheckBox")).open();
      });
  }

  // -------------------------- FUNCTIONS --------------------------

  // Set the value of Analyst checkbox
  toggleAnalystCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        title: !checkBox.analyst
      }
    });
  };

  // Set the value of Author checkbox
  toggleAuthorCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        author: !checkBox.author
      }
    });
  };

  // Set the value of DOI checkbox
  toggleDoiCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        doi: !checkBox.doi
      }
    });
  };

  // Set the value of Participants checkbox
  toggleParticipantsCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        participants: !checkBox.participants
      }
    });
  };

  // Set the value of Research Question checkbox
  toggleResearchQuestionCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        researchQuestion: !checkBox.researchQuestion
      }
    });
  };

  // Set the value of Research Result checkbox
  toggleResearchResultCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        researchResult: !checkBox.researchResult
      }
    });
  };

  // Set the value of SE Method checkbox
  toggleSeMethodCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        seMethod: !checkBox.seMethod
      }
    });
  };

  // Set the value of SE Methodology checkbox
  toggleSeMethodologyCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        seMethodology: !checkBox.seMethodology
      }
    });
  };

  // Set the value of Title checkbox
  toggleTitleCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        title: !checkBox.title
      }
    });
  };

  // Set the value of Type checkbox
  toggleTypeCheckBox = () => {
    const { checkBox } = this.state;
    this.setState({
      checkBox: {
        ...checkBox,
        type: !checkBox.type
      }
    });
  };

  // Set the value of Text Input for Search by Keywords
  onTextInputSearchChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  // -------------------------- Select Year Range --------------------------
  onSelectBoxSearch = (type, event) => {
    if (event.target.value === "on") {
      this.setState({
        type
      });
    }
  };

  // Change value on 'from year'
  onFromChange = date => {
    this.setState({
      from: date
    });
  };

  // Change value on 'to year'
  onToChange = date => {
    this.setState({
      to: date
    });
  };
  // -------------------------- END Select Year Range --------------------------

  // -------------------------- Set values for Filter Pannel --------------------------
  // Add one more filter row
  onAddMoreCondition = index => {
    const { conditions } = this.state;
    const newCondition = {
      syntax: "AND", // AND - OR - OR NOT
      field: 1, // ID của field
      operator: "Equal to", // Equal to - Not Equal to
      value: "" // Giá trị của condition
    };
    conditions.splice(index + 1, 0, newCondition);
    this.setState({
      conditions
    });
  };

  // Remove the filter row
  onRemoveCondition = index => {
    const { conditions } = this.state;
    const newConditions = [...conditions];
    newConditions.splice(index, 1);
    this.setState({
      conditions: newConditions
    });
  };

  // Change the value of syntax dropdown on a specified index row
  onDropDownSyntaxChange = (event, index) => {
    const { conditions } = this.state;
    conditions[index].syntax = event.target.value;
    this.setState({
      conditions
    });
  };

  // Change the value of field dropdown on a specified index row
  onDropDownFieldChange = (event, index) => {
    const { conditions, field } = this.state;
    const fieldId = parseInt(event.target.value);
    const selectdField = field && field.find(f => f.id === fieldId);

    // If the selected field got a fixed value list, the first value would be selected as default
    const value =
      selectdField && selectdField.option ? selectdField.option[0].value : "";

    conditions[index].field = fieldId;
    conditions[index].value = value;
    this.setState({
      conditions
    });
  };

  // Change the value of operator dropdown on a specified index row
  onDropDownOperatorChange = (event, index) => {
    const { conditions } = this.state;
    conditions[index].operator = event.target.value;
    this.setState({
      conditions
    });
  };

  // Change the value of Dropdown Value on a specified index row
  onDropDownValueChange = (event, index) => {
    const { conditions } = this.state;
    conditions[index].value = event.target.value;
    this.setState({
      conditions
    });
  };

  // Change the value of Input Value on a specified index row
  onInputValueChange = (event, index) => {
    const { conditions } = this.state;
    conditions[index].value = event.target.value;
    this.setState({
      conditions
    });
  };
  //-------------------------- END Set values for Filter Pannel --------------------------

  // -------------------------- FUNCTION Press Button Search --------------------------
  onPressButtonSearch = () => {
    const { type, search, from, to, conditions } = this.state;
    const data = { type, search, from, to, conditions };
    this.props.getDataByCondition(data);
  };
  // -------------------------- END FUNCTION Press Button Search -----------------------

  // -------------------------- RENDER TOP SECTIONS --------------------------
  // Panel to select either "Search by Keywords" or "Search by Filters"
  renderSearchSelectBox() {
    const { type } = this.state;
    return (
      <div className="row">
        <label className="col">
          <input
            name="searchType"
            className="with-gap"
            type="radio"
            checked={type === "keywords"}
            onChange={e => {
              this.onSelectBoxSearch("keywords", e);
            }}
          />
          <span>Search by Keywords</span>
        </label>
        <label className="col">
          <input
            name="searchType"
            className="with-gap"
            type="radio"
            checked={type === "filters"}
            onChange={e => {
              this.onSelectBoxSearch("filters", e);
            }}
          />
          <span>Search by Filters</span>
        </label>
      </div>
    );
  }

  // Panel of "Search by Keywords"
  renderSearchSection() {
    const { type, search } = this.state;
    if (type === "keywords") {
      return (
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col s10">
            <input
              type="text"
              placeholder="Enter keyword to search"
              value={search}
              onChange={e => {
                this.onTextInputSearchChange(e);
              }}
            />
          </div>
          <div className="col s2">
            <button
              className="btn"
              onClick={() => {
                this.onPressButtonSearch();
              }}
            >
              Search
            </button>
          </div>
        </div>
      );
    }
    return null;
  }

  // Panel of "Search by Filters"
  renderFilterSection() {
    const { type } = this.state;
    if (type === "filters") {
      return (
        <div className="row" style={{ marginTop: 10 }}>
          {this.renderFromToSection()}
          {this.renderConditionSection()}
        </div>
      );
    }
    return null;
  }

  // Row select Year Range and Search Button
  renderFromToSection() {
    const { from, to } = this.state;
    return (
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col s10">
          <div className="row">
            <div className="col s2">
              <p style={{ textAlign: "left" }}>Year range:</p>
            </div>
            <div className="col s1">
              <p style={{ textAlign: "left" }}>From: </p>
            </div>
            <div className="col s2" style={{ textAlign: "left" }}>
              <YearPicker
                selected={from}
                onChange={date => this.onFromChange(date)}
                dateFormat="yyyy"
              />
            </div>
            <div className="col s2">
              <p style={{ textAlign: "right" }}>To: </p>
            </div>
            <div className="col s2">
              <YearPicker
                selected={to}
                onChange={date => this.onToChange(date)}
                dateFormat="yyyy"
              />
            </div>
          </div>
        </div>

        <div className="col s2">
          <button
            className="btn"
            onClick={() => {
              this.onPressButtonSearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
    );
  }

  renderConditionSection() {
    const { conditions } = this.state;
    if (conditions) {
      return conditions.map((item, index) =>
        this.renderSingleCondition(item, index)
      );
    }
    return null;
  }

  renderSingleCondition(condition, index) {
    return (
      <div className="row condition-row" key={index}>
        <div className="col s2">
          {this.renderSingleConditionFirstField(condition, index)}
        </div>
        <div className="col s8">
          <div className="row">
            <div className="col s4">
              {this.renderSingleConditionSecondField(condition, index)}
            </div>
            <div className="col s4">
              {this.renderSingleConditionThirdField(condition, index)}
            </div>
            <div className="col s4">
              {this.renderSingleConditionLastField(condition, index)}
            </div>
          </div>
        </div>
        <div className="col s2">{this.renderSingleConditionButton(index)}</div>
      </div>
    );
  }

  renderSingleConditionFirstField(condition, index) {
    if (index === 0) {
      // Check if this is the first condition row
      return null;
    }
    return (
      <select
        className="browser-default"
        onChange={e => {
          this.onDropDownSyntaxChange(e, index);
        }}
        value={condition.syntax}
      >
        <option value="AND">AND</option>
        <option value="AND NOT">AND NOT</option>
        <option value="OR">OR</option>
        <option value="OR NOT">OR NOT</option>
      </select>
    );
  }

  renderSingleConditionSecondField(condition, index) {
    const { field } = this.state;
    if (field) {
      const fieldOptions = field.map((f, i) => {
        return (
          <option key={i} value={f.id}>
            {f.name}
          </option>
        );
      });
      return (
        <select
          className="browser-default"
          onChange={e => {
            this.onDropDownFieldChange(e, index);
          }}
          value={condition.field}
        >
          {fieldOptions}
        </select>
      );
    }
    return null;
  }

  renderSingleConditionThirdField(condition, index) {
    return (
      <select
        className="browser-default"
        onChange={e => {
          this.onDropDownOperatorChange(e, index);
        }}
        value={condition.operator}
      >
        <option value="Equal to">Equal to</option>
        <option value="Not equal">Not equal</option>
      </select>
    );
  }

  renderSingleConditionLastField(condition, index) {
    const { field } = this.state;
    const selectedField = field.find(f => f.id === condition.field);
    if (selectedField && selectedField.option) {
      // If the selected field got fixed value list, then show up.
      const fieldOptions = selectedField.option.map((f, i) => {
        return (
          <option key={i} value={f.value}>
            {f.name}
          </option>
        );
      });
      return (
        <select
          className="browser-default"
          onChange={e => {
            this.onDropDownValueChange(e, index);
          }}
          value={condition.value}
        >
          {fieldOptions}
        </select>
      );
    } else if (selectedField && !selectedField.option) {
      // Otherwise, show up the textbox to input value
      return (
        <input
          type="text"
          placeholder="Input value"
          value={condition.value}
          onChange={e => {
            this.onInputValueChange(e, index);
          }}
        />
      );
    }
    return null;
  }

  renderSingleConditionButton(index) {
    if (index === 0) {
      return (
        <div className="row">
          <div className="col">
            <p>
              <i
                className="material-icons"
                style={{ fontSize: 30, cursor: "pointer", color: "green" }}
                onClick={() => {
                  this.onAddMoreCondition(index);
                }}
              >
                add_circle_outline
              </i>
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col">
          <p>
            <i
              className="material-icons"
              style={{ fontSize: 30, cursor: "pointer", color: "red" }}
              onClick={() => {
                this.onRemoveCondition(index);
              }}
            >
              remove_circle_outline
            </i>
          </p>
        </div>
        <div className="col">
          <p>
            <i
              className="material-icons"
              style={{ fontSize: 30, cursor: "pointer", color: "green" }}
              onClick={() => {
                this.onAddMoreCondition(index);
              }}
            >
              add_circle_outline
            </i>
          </p>
        </div>
      </div>
    );
  }

  renderTopSection() {
    return (
      <div
        className="row"
        style={{
          border: "1px solid #c8c8c8",
          marginTop: 10,
          padding: 10,
          backgroundColor: "#fff"
        }}
      >
        {this.renderSearchSelectBox()}
        {this.renderSearchSection()}
        {this.renderFilterSection()}
      </div>
    );
  }
  // -------------------------- END RENDER TOP SECTIONS --------------------------

  // -------------------------- RENDER BOTTOM SECTIONS --------------------------
  // Declare popup that contain the list of checkboxes to edit the visibility of columns
  renderModalCheckBox() {
    const { checkBox } = this.state;
    return (
      <div id="modalCheckBox" className="modal">
        <div className="modal-content">
          {/* Row 1: table title */}
          <h4 style={{ textAlign: "left" }}>Select Table Columns</h4>

          {/* Row 2: Analyst, Authour, DOI, Participants, Research Question */}
          <div className="row">
            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.analyst}
                onChange={() => {
                  this.toggleAnalystCheckBox();
                }}
              />
              <span>Analyst</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.author}
                onChange={() => {
                  this.toggleAuthorCheckBox();
                }}
              />
              <span>Author</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.doi}
                onChange={() => {
                  this.toggleDoiCheckBox();
                }}
              />
              <span>DOI</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.participants}
                onChange={() => {
                  this.toggleParticipantsCheckBox();
                }}
              />
              <span>Participants</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.researchQuestion}
                onChange={() => {
                  this.toggleResearchQuestionCheckBox();
                }}
              />
              <span>Research Question</span>
            </label>
          </div>

          {/* Row 3: Research Result, SE Method, SE Methodology, Title, Type */}
          <div className="row">
            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.researchResult}
                onChange={() => {
                  this.toggleResearchResultCheckBox();
                }}
              />
              <span>Research Result</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.seMethod}
                onChange={() => {
                  this.toggleSeMethodCheckBox();
                }}
              />
              <span>SE Method</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.seMethodology}
                onChange={() => {
                  this.toggleSeMethodologyCheckBox();
                }}
              />
              <span>SE Methodology</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.title}
                onChange={() => {
                  this.toggleTitleCheckBox();
                }}
              />
              <span>Title</span>
            </label>

            <label className="col">
              <input
                type="checkbox"
                checked={checkBox.type}
                onChange={() => {
                  this.toggleTypeCheckBox();
                }}
              />
              <span>Type</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

  // Render the Search Result Table
  renderBottomSection() {
    const { checkBox } = this.state;
    const { data } = this.props;
    // Check the conditions of the checkboxes in order to show the selected columns only
    let columns = [];
    if (checkBox.type) {
      columns = [...columns, { title: "Type", field: "type" }];
    }
    if (checkBox.title) {
      columns = [...columns, { title: "Title", field: "title" }];
    }
    if (checkBox.seMethodology) {
      columns = [
        ...columns,
        { title: "SE Methodology", field: "seMethodology" }
      ];
    }
    if (checkBox.seMethod) {
      columns = [...columns, { title: "SE Method", field: "seMethod" }];
    }
    if (checkBox.author) {
      columns = [...columns, { title: "Author", field: "author" }];
    }
    if (checkBox.doi) {
      columns = [...columns, { title: "DOI", field: "doi" }];
    }
    if (checkBox.participants) {
      columns = [...columns, { title: "Participants", field: "participants" }];
    }
    if (checkBox.researchQuestion) {
      columns = [
        ...columns,
        { title: "Research Question", field: "researchQuestion" }
      ];
    }
    if (checkBox.researchResult) {
      columns = [
        ...columns,
        { title: "Research Result", field: "researchResult" }
      ];
    }
    if (checkBox.analyst) {
      columns = [...columns, { title: "Analyst", field: "analyst" }];
    }

    const option = {
      search: false,
      showTitle: false
    };
    return (
      //List of checkboxes to edit the visibility of columns & result table
      <div
        className="row"
        style={{
          border: "1px solid #c8c8c8",
          marginTop: 10,
          padding: 10,
          backgroundColor: "#fff"
        }}
      >
        <div className="col s12">
          <h5>Search Result:</h5>
        </div>
        <div className="col s12" id="tableSection">
          <MaterialTable
            options={option}
            columns={columns}
            data={data}
            style={{ boxShadow: "none", borderBottom: 0 }}
            // When click on a row, get details of selected record then push the details to the screen 'article-details
            onRowClick={(e, detail) => {
              this.props.history.push("/article-details", { detail: detail });
            }}
          />
        </div>
      </div>
    );
  }

  // This section combines all components to show up on this page: header, body, footer
  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Header title="Home" />
        <div className="container">
          {this.renderTopSection()}
          {this.renderBottomSection()}
          {this.renderModalCheckBox()}
        </div>
        <Footer />
      </div>
    );
  }
}
// -------------------------- END RENDER BOTTOM SECTIONS --------------------------

// Get the relevant fields in that 'state' of redux then pass those values to 'props' via reducer
const mapStateToProps = state => {
  return {
    data: state.homeReducer.data
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      getDataByCondition
    }
  )
)(Home);
