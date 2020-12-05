import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';
import masterPartListDefault from '../../reducers/STARTING_DATA'


describe('parts store actions', () => {

  const defaultState = masterPartListDefault;
  const testClone = [...defaultState];
  testClone[1].selection[0].partQuantity = testClone[1].selection[0].partQuantity -1;
  const clone = [...defaultState];
  clone[1].selection[0].partQuantity = clone[1].selection[0].partQuantity -1;

  test('update parts should add new parts to the state', () => {
    expect(actions.updatePartList(clone)).toEqual({
      masterPartList: testClone,
      type: c.UPDATE_PART_LIST
    })
  })

  test('edit should return boolean', () => {
      expect(actions.editPart(true)).toEqual({
        editing: true,
        type: c.EDIT
      })
    })
  test('visible page should return boolean', () => {
    expect(actions.formVisible(true)).toEqual({
      formVisibleOnPage: true,
      type: c.FORM_VISIBLE
    })
  })
  test('master cart list should update with new cart', () => {
    
  })
})