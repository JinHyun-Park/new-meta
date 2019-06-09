import Constant from '@/constant/regConstant';

export default {
  setToggle: (state, payload) => {
    console.log(`들어왔다: ${payload.toggle.text}`);
    state.toggle.text = payload.toggle.text;
  },
  [Constant.CHANGE_CONTENTS]: (state, payload) => {
    state.recvData = payload.sendData;
    state.sendData = payload.recvData;
  },
  [Constant.INITIATE_DTLFORM]: (state) => {
    state.sendData = {
      company: '',
      sysNmKor: '',
      sysNmEng: '',
      hostNm: '',
      ipVip: '',
      ipNat: '',
      os: '',
      mid: 'MID',
      operator: '운영담당',
      manager: '담당매니저',
    };
    state.recvData = {
      company: '',
      sysNmKor: '',
      sysNmEng: '',
      hostNm: '',
      ipVip: '',
      ipNat: '',
      os: '',
      mid: 'MID',
      operator: '운영담당',
      manager: '담당매니저',
    };
  },
};
