const BASE_URL = "https://mutan.azurewebsites.net";

/**
 * ユーザの確認・取得
 *
 * @param {{ token: string }} cx
 *
 * @returns {Promise<{ token: string }>}
 */
export async function getUser(cx) {
  const reply = await fetch(BASE_URL + "/get_user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * ユーザの生成
 *
 * @returns {Promise<{ token: string }>}
 *
 */
export async function createUser() {
  const reply = await fetch(BASE_URL + "/create_user");
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * ユーザの削除
 *
 * @param {{ token: string }} cx
 */
export async function deleteUser(cx) {
  await fetch(BASE_URL + "/delete_user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
}

/**
 * すべてのタスクの取得
 *
 * @param {{
 *   token: string,
 *   offset: number,
 *   limit: number,
 *   order_by: "name" | "times" | "latest",
 *   descending: bool,
 * }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   name: string,
 *   description: string?,
 *   done_times: number,
 *   latest_done_at: string?,
 *   training_instances: {
 *     id: number,
 *     training_id: number,
 *     weight: number,
 *     times: number,
 *     name: string,
 *     description: string?,
 *   }[],
 * }[]>}
 */
export async function getTasks(cx) {
  const reply = await fetch(BASE_URL + "/get_tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * 単体のタスクの取得
 *
 * @param {{ token: string, id: number }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   name: string,
 *   description: string?,
 *   done_times: number,
 *   latest_done_at: string?,
 *   training_instances: {
 *     id: number,
 *     training_id: number,
 *     weight: number,
 *     times: number,
 *     name: string,
 *     description: string?,
 *   }[],
 * }>}
 */
export async function getTask(cx) {
  const reply = await fetch(BASE_URL + "/get_task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * タスクの追加
 *
 * @param {{
 *   token: string,
 *   name: string,
 *   description: string?,
 *   training_instances: {
 *     training_id: number,
 *     weight: number,
 *     times: number,
 *   }[],
 * }} cx
 *
 * @returns {Promise<{ id: number }>}
 */
export async function createTask(cx) {
  const reply = await fetch(BASE_URL + "/create_task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * タスクの削除
 *
 * @param {{ token: string, id: number }} cx
 */
export async function deleteTask(cx) {
  await fetch(BASE_URL + "/delete_task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
}

/**
 * 進行中のタスクを取得
 *
 * @param {{ token: string }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   task_id: number,
 *   progress: i32,
 *   name: string,
 *   description: string?,
 *   training_instances: {
 *     id: number,
 *     training_id: number,
 *     weight: number,
 *     times: number,
 *     name: string,
 *     description: string?,
 *   }[],
 * }>}
 */
export async function getTaskInstance(cx) {
  const reply = await fetch(BASE_URL + "/get_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * 進行中のタスクを追加
 *
 * @param {{ token: string, task_id: number }} cx
 */
export async function createTaskInstance(cx) {
  await fetch(BASE_URL + "/create_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
}

/**
 * 進行中のタスクを進行
 *
 * @param {{ token: string, progress: number }} cx
 */
export async function proceedTaskInstance(cx) {
  await fetch(BASE_URL + "/proceed_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
}

/**
 * 進行中のタスクを削除・完了
 *
 * @param {{ token: string }} cx
 */
export async function deleteTaskInstance(cx) {
  await fetch(BASE_URL + "/delete_task_instance", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
}

/**
 * すべてのトレーニングを取得
 *
 * @param {{
 *   token: string,
 *   offset: number,
 *   limit: number
 *   order_by: "name" | "times" | "latest",
 *   descending: bool,
 *   search: string?,
 *   tag: string?,
 * }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   name: string,
 *   description: string?,
 *   weight: number,
 *   times: number,
 *   tags: string[],
 *   done_times: number,
 *   latest_done_at: string?,
 * }[]>}
 */
export async function getTrainings(cx) {
  const reply = await fetch(BASE_URL + "/get_trainings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * 単体のトレーニングを取得
 *
 * @param {{ token: string, id: number }} cx
 *
 * @returns {Promise<{
 *   id: number,
 *   name: string,
 *   description: string?,
 *   weight: number,
 *   times: number,
 *   tags: string[],
 *   done_times: number,
 *   latest_done_at: string?,
 * }>}
 */
export async function getTraining(cx) {
  const reply = await fetch(BASE_URL + "/get_training", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}

/**
 * トレーニングの時系列データを取得
 *
 * @param {{
 *   token: string,
 *   from: string,
 *   to: string,
 *   descending: bool,
 *   tag: string?,
 * }} cx
 *
 * @returns {Promise<{
 *   at: string,
 *   times: number,
 * }>}
 */
export async function getTimeSeries(cx) {
  const reply = await fetch(BASE_URL + "/get_time_series", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cx),
  });
  const json = await reply.json();

  console.log(json);
  return json;
}
