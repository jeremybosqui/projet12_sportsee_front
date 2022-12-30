// import axios from "axios";
//
// const api = axios.create({
//     baseURL: `http://localhost:3000/`
// });
//
// /**
//  * recuperer le user-activity via le localhost port 3003
//  * @param {string} id
//  * @returns {Array}
//  */
//  export const getUserActivity = async (id) => {
//     try {
//       const res = await api.get(`http://localhost:3003/user/${id}/activity`);
//       return res.data;
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   /**
//    * recuperer le user-infos via le localhost port 3003
//    * @param {string} id
//    * @returns {object}
//    */
//
//   export const getUserInfos = async (id) => {
//     try {
//       const res = await api.get(`http://localhost:3003/user/${id}`);
//       return res.data;
//     } catch (e) {
//       console.log(e);
//     }
//   };
//
//   /**
//    * recuperer le user-performance via le localhost port 3003
//    * @param {string} id
//    * @returns {object}
//    */
//
//   export const getUserPerformance = async (id) => {
//     try {
//       const res = await api.get(`http://localhost:3003/user/${id}/performance`);
//       return res.data;
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   /**
//    * recuperer le user-average-session via le localhost port 3003
//    * @param {string} id
//    * @returns {object}
//    */
//
//   export const getUserAverageSessions = async (id) => {
//     try {
//       const res = await api.get(`http://localhost:3003/user/${id}/average-sessions`);
//       return res.data;
//     } catch (e) {
//       console.log(e);
//     }
//   };



/**
 *  Ceci est un exemple pour la recuperation des donnes backend API
 * Get userdata main information
 * @return {Object} Return les donnes du user en recuperant les infos via le backend déjà créé
 */
// export const getDataUser = (id) => fetch(process.env.REACT_APP_BACKEND + "user/" + id)
//     .then(response => response.json()).then(data => data.data)
