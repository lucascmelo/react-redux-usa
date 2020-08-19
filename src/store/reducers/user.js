import mockData from '../../assets/MOCK_DATA.json';

const INITIAL_STATE = {
  users: mockData,
}

export default function user(state = INITIAL_STATE, action) {
  return {
    ...state,
    users: mockData
  };
}
