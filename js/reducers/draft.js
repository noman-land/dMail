import { Map } from 'immutable';
import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const draft = (
  state = {
    additionalRecipients: [],
    attachments: [],
    author: '',
    authoredDate: null,
    body: '',
    inResponseTo: '',
    replyTo: '',
    subject: '',
    version: 1,
  },
  action,
) => {
  switch (action.type) {
    case ActionTypes.DRAFT_SET_BODY:
      return {
        ...state,
        body: action.payload.body,
      };
    case ActionTypes.DRAFT_SET_SUBJECT:
      return {
        ...state,
        subject: action.payload.subject
      };
    default:
      return state;
  }
};

export default draft;
