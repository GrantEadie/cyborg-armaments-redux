import React from 'react';
import BodyTypeList from './BodyTypeList';
import NewPartForm from '../part/NewPartForm.js'
import PartDetail from '../part/PartDetail'
import EditPartForm from '../part/EditPartForm';
import CartList from '../cart/CartList';
import BodyTypeSVG from './BodyTypeSVG';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class BodyTypeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartTotal: 0,
      masterCartList: [],
      formVisibleOnPage: false,
      selectedPart: null,
      bodyTypeVisibleOnPage: 0,
      editing: false,
    };
  }

  handleBodyClick = (event) => {
    const { dispatch } = this.props
    const bodyTypeVisible = parseInt(event.currentTarget.id)
    const action0 = {
      type: 'CHANGE_VISIBLE_BODYTYPE',
      bodyTypeVisibleOnPage: bodyTypeVisible
    }
    dispatch(action0);
  }


  handleBuyClick = (id) => {
    const { dispatch } = this.props;
    const currentCatIndex = this.props.bodyTypeVisibleOnPage;
    const clone = [...this.props.masterPartList]
    const cartClone = [...this.state.masterCartList]
    let partPrice = 0;
    for (let i = 0; i <= clone[currentCatIndex].selection.length; i++){
      if (clone[currentCatIndex].selection[i].id === id){

        const currentPart = clone[currentCatIndex].selection[i];
        if (clone[currentCatIndex].selection[i].partQuantity > 1) {
          clone[currentCatIndex].selection[i].partQuantity = clone[currentCatIndex].selection[i].partQuantity -1;

        } else {
          clone[currentCatIndex].selection = this.props.masterPartList[currentCatIndex].selection.filter(pro => pro.id !== id);
        }


        let match = false
        for (const e of cartClone) {
          if (e.id === currentPart.id) {
            match = true
            e.cartTotal += 1;
            partPrice = currentPart.partPrice;
            break;
          } 
        };
        if (!match) {
          cartClone.push(currentPart)
          partPrice = currentPart.partPrice;
        }
        
        break;        
      }
    }
    
    const action0 = {
      type: 'BUY_PART',
      masterPartList: clone
    }
    dispatch(action0)
    this.setState({
      selectedPart: null,
      formVisibleOnPage:false,
      masterCartList: cartClone,
      cartTotal: this.state.cartTotal + partPrice
    });
  }

  handleEditingPartInList = (partToEdit) => {
    const currentCatIndex = this.props.bodyTypeVisibleOnPage;
    const clone = [...this.props.masterPartList]
    const editedSelection = this.props.masterPartList[currentCatIndex].selection
    .filter(part => part.id !== this.state.selectedPart.id)
    .concat(partToEdit);
    clone[currentCatIndex].selection = editedSelection;
    this.setState({
      masterPartList: clone,
      editing: false,
      selectedPart: null
    });
  }

  handleDeleteCartPart = (oldPart) => {
    const clone = [...this.props.masterPartList];
    let newCartTotalPrice = this.state.cartTotal;
    for (let i = 0; i < clone.length; i++){
      let match = false;
      for (let j = 0; j < clone[i].selection.length; j++){
        if (clone[i].selection[j].id === oldPart.id){
          match = true;
          clone[i].selection[j].partQuantity = clone[i].selection[j].partQuantity + oldPart.cartTotal;
          newCartTotalPrice -= oldPart.partPrice * oldPart.cartTotal;
          clone[i].selection[j].cartTotal = 1;
          break;
        }
      }
        if (!match && oldPart.partBodyType === clone[i].bodyType) {
          const cloneOldPart = {...oldPart};
          cloneOldPart.partQuantity = oldPart.cartTotal;
          newCartTotalPrice -= oldPart.partPrice * oldPart.cartTotal;
          cloneOldPart.cartTotal = 1;
          clone[i].selection.push(cloneOldPart)
          break;
        }
      }

    const newSelection = this.state.masterCartList.filter(pro => pro.id !== oldPart.id);

    this.setState({
      masterPartList: clone,
      masterCartList: newSelection,
      cartTotal: newCartTotalPrice
    })
  }

  handleEditClick = () => {

    this.setState({editing: true});
  }

  handleClickForm = () => {
    if (this.state.selectedPart != null){
      this.setState({
        formVisibleOnPage: false,
        selectedPart: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleDeletingPart = (id) => {
    const currentCatIndex = this.props.bodyTypeVisibleOnPage;
    const clone = [...this.props.masterPartList]
    const newSelection = this.props.masterPartList[currentCatIndex].selection.filter(pro => pro.id !== id);     
    clone[currentCatIndex].selection = newSelection;    
    this.setState({
      selectedPart: null,
      formVisibleOnPage:false,
      masterPartList: clone});    
  }  

  handleClickUp = () => {
    const { dispatch } = this.props
    if (this.props.bodyTypeVisibleOnPage >= 5) {
      const action0 = {
        type: 'CHANGE_VISIBLE_BODYTYPE',
        bodyTypeVisibleOnPage: 0
      }
      dispatch(action0);
    }
    else {
      const action1 = {
        type: 'CHANGE_VISIBLE_BODYTYPE',
        bodyTypeVisibleOnPage: this.props.bodyTypeVisibleOnPage + 1
      }
      dispatch(action1)
    }
  }

  handleClickDown = () => {
    console.log("clickdown")
    const { dispatch } = this.props
    if (this.props.bodyTypeVisibleOnPage <= 0) {
      const action0 = {
        type: 'CHANGE_VISIBLE_BODYTYPE',
        bodyTypeVisibleOnPage: 5
      }
      dispatch(action0)
    }
    else {
      const action1 = {
        type: 'CHANGE_VISIBLE_BODYTYPE',
        bodyTypeVisibleOnPage: this.props.bodyTypeVisibleOnPage - 1
      }
      dispatch(action1)
    }
  }

  handleChangingSelectedPart = (id) => {
    const currentCatIndex = this.props.bodyTypeVisibleOnPage;
    const selectedPart = this.props.masterPartList[currentCatIndex].selection.filter(pro => pro.id === id)[0];  
    this.setState({selectedPart: selectedPart});
  }

  handleAddingNewPartToList = (newPart) => {
    const clone = [...this.props.masterPartList]
    const newSelection = clone[newPart.partBodyType].selection.concat(newPart);    
    clone[newPart.partBodyType].selection = newSelection;
    this.setState({
      masterPartList: clone,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;

    if (this.state.editing){
      currentVisibleState = <EditPartForm part = {this.state.selectedPart} onEditPart = {this.handleEditingPartInList} />
      buttonText = "Return to Armaments";
    } else if (this.state.selectedPart != null) {
      currentVisibleState = <PartDetail 
      part = {this.state.selectedPart} 
      onClickingDelete = {this.handleDeletingPart}
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Armaments";
    }
    else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewPartForm onNewPartCreation={this.handleAddingNewPartToList} />;
      buttonText = "Return to Armaments"
    } else {
      currentVisibleState = <BodyTypeList
        currentIndex={this.props.bodyTypeVisibleOnPage} 
        availableParts={this.props.masterPartList} 
        onPartSelection={this.handleChangingSelectedPart}
        onBuyPart={this.handleBuyClick}
        />
      buttonText = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
    </svg>
    }    

    return (
      <React.Fragment>
        <div className="container">
        <div className="row">          
          <div className="col-md-8">
          <button className="arrow btn btn-outline-light btn-sm" onClick={this.handleClickDown}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
        </svg></button>
        <button className="arrow btn btn-outline-light btn-sm" onClick={this.handleClickUp}><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg></button>
        <button className="mx-auto btn btn-outline-info btn-sm" onClick={this.handleClickForm}>{buttonText}</button>
        {currentVisibleState}
          </div>
          <div className="col-md-4">
            <BodyTypeSVG onBodyClick={this.handleBodyClick} currentIndex={this.props.bodyTypeVisibleOnPage} />
          </div>
        </div>
        <div className="row">
        <div className="col-md-12">
          <CartList cartTotal={this.state.cartTotal} onDeleteCartPart={this.handleDeleteCartPart} cartList={this.state.masterCartList}/>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

BodyTypeControl.propTypes = {
  bodyTypeVisibleOnPage: PropTypes.number,
  masterPartList: PropTypes.array
}

const mapStateToProps = state => {
  return {
    bodyTypeVisibleOnPage: state.bodyTypeVisibleOnPage,
    masterPartList: state.masterPartList
  }
}

BodyTypeControl = connect(mapStateToProps)(BodyTypeControl);

export default BodyTypeControl;