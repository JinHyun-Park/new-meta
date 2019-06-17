import Constant from '@/constant/regConstant';

export default {
  setToggle: (state, payload) => {
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
  ifFormAddAction: (state, payload) => {
    state.regList.push(payload.addForm);
  },
  initiateRegList: (state) => {
    state.regList = [{
      name: 'MQ',
      ifNmEng: 'INFO_SMS_SND',
      ifNmKor: 'SMS 발송',
      direction: '단방향',
      async: 'Y',
      delete: 'DEL',
      id: 1,
      regDtl: [{
        nm: '단방향',
        dt: '양방향',
      }],
    },
    {
      name: 'MQ',
      ifNmEng: 'SMS_RSLT',
      ifNmKor: 'SMS 결과',
      direction: '단방향',
      async: 'Y',
      delete: 'DEL',
      id: 2,
    },
    {
      name: 'FILE',
      ifNmEng: 'WEEK_DATA',
      ifNmKor: '주간 데이터',
      direction: '단방향',
      async: 'Y',
      delete: 'DEL',
      id: 3,
    },
    {
      name: 'FILE',
      ifNmEng: 'INFO_SMS_SND',
      ifNmKor: 'SMS 발송',
      direction: '단방향',
      async: 'Y',
      delete: 'DEL',
      id: 4,
    },
    {
      name: 'MQ',
      ifNmEng: 'INFO_SMS_SND',
      ifNmKor: 'SMS 발송',
      direction: '단방향',
      async: 'Y',
      delete: 'DEL',
      id: 5,
    },
    {
      name: 'MQ',
      ifNmEng: 'INFO_SMS_SND',
      ifNmKor: 'SMS 발송',
      direction: '단방향',
      async: 'Y',
      delete: 'DEL',
      id: 6,
    },
    {
      name: 'MQ',
      ifNmEng: 'INFO_SMS_SND',
      ifNmKor: 'SMS 발송',
      direction: '단방향',
      async: 'Y',
      delete: 'DEL',
      id: 7,
    },
    ];
  },
};
