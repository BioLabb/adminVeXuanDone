import { child, get, ref, set, update } from "firebase/database";
import { database } from "../utils/database";
import { readAllRealTime } from "./api";

const db = database;
const urlVe = "vexuan";


export function readSoVe() {
  const dbRef = ref(db);
  return get(child(dbRef, "sove")).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
      console.log(snapshot.val());
    } else {
      console.log("No data available");
      return null;
    }
  }).catch((error) => {
    console.error(error);
    throw error
  })
}
// nếu không truyền id vào thì mặc định lấy tất cả data
export async function readVeXuanRealTime(id = "") {
  return readAllRealTime(urlVe, id);
}

export function updateVeXuan(objVeXuan) {
  const db = database;
  // set(ref(db, `${urlVe}/${objVeXuan.ve}`), {
  //     name: objVeXuan.name,
  //     mssv: objVeXuan.mssv,
  //     email: objVeXuan.email,
  //     facebook: objVeXuan.facebook,
  //     ve:objVeXuan.ve
  // });


  //   // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['vexuan/' + objVeXuan.ve] = objVeXuan;
  updates['vexuan/4'] = objVeXuan;

  return update(ref(db), updates);
}

export function writeVeXuan(numVe) {
  const db = database;
  set(ref(db, urlVe + "/" + numVe), {
    id: numVe
  });
}

export async function writeListAllow(mssv, hoten) {
  const db = database;

  try {
    // Thử thêm dữ liệu vào database
    await set(ref(db, "listAllow" + "/" + mssv), {
      mssv: mssv,
      name: hoten
    });

    // Nếu không có lỗi, trả về true
    return true;
  } catch (error) {
    // Nếu có lỗi, in thông báo lỗi và trả về false
    console.error('Error writing data:', error);
    return false;
  }
}

export async function readAllow() {
  return readAllRealTime('listAllow');
}

export async function readAllowWithId(mssv) {
  return readAllRealTime(`listAllow/${mssv}`);
}