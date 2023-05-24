import axios from 'axios';

export const onAuthenticate = async (payload) => {
  console.log(payload)
  const URL = `/session/login`;
  try {
    let response = await axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: payload,
      withCredentials: true
    })
    return response

  } catch (error) {
    return error
  }
};

export const logout = async () => {
  const URL = `/session/login`;
  try {
    let response = await axios(URL, {
      method: 'DELETE',
      withCredentials: true
    })
    return response
    
  } catch (error) {
    return error;
  };
};

export const getCompanyByResourceId = resourceId => {
  const URL = `/companies/${resourceId}`;
  return axios(URL, {
    method: 'GET',
    withCredentials: true
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
}

export const getCompanies = () => {
  const URL = `/companies`;
  return axios(URL, {
    method: 'GET',
    withCredentials: true
  })
    .then(response => response)
    .catch(error => {
      throw error;
    });
};

export const getUserByCompanyResourceId = resourceId => {
  const URL = `/companies/${resourceId}/users`
  return axios(URL, {
    method: 'GET',
    withCredentials: true
  }).then(response => response).catch(error => {
    throw error;
  })
}

export const postUserByCompanyResourceId = (resourceId, payload) => {
  const URL = `/companies/${resourceId}/users`
  return axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // whatever you want
    },
    data: payload,
    withCredentials: true
  }).then(response => response).catch(error => {
    throw error;
  })
}

export const getUserbyUserResourceId = (companyResourceId, userResourceId) => {
  const URL = `/companies/${companyResourceId}/users/${userResourceId}`
  return axios(URL, {
    method: 'GET',
    withCredentials: true
  }).then(response => response).catch(error => {
    throw error;
  })
}

export const onSignup = payload => {
  const URL = `/signup`;
  return axios(URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    data: payload,
  }).then(response => response).catch(error => {
    throw error;
  });
};

export const getGroups = resourceId => {
  const URL = `/companies/${resourceId}/groups`
  return axios(URL, {
    method: 'GET',
    withCredentials: true
  }).then((response) => response)
    .catch((error) => {
      throw error
    })
}

export const confirm = confirmLink => {
  const URL = `${confirmLink}`
  return axios(URL, {
    method: 'GET',
    withCredentials: true
  }).then((response) => response)
    .catch((error) => {
      throw error
    })
}