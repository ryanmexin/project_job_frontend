const baseUrl = "https://www.themuse.com/api/public";

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
};

// Get jobs 
export function getJobs() {
    return fetch(`${baseUrl}/jobs?page=1`, {
       
    }).then(checkResponse);
}

