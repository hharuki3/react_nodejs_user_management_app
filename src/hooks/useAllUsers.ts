import axios from "axios";
import { User } from "../types/api/user";
import { useCallback, useState } from "react";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const { showMessage } = useMessage();
  const getUser = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.data) {
          setUsers(res.data);
          showMessage({
            title: "ユーザー一覧取得しました",
            status: "success",
          });
        } else {
          showMessage({ title: "ユーザーが見つかりません", status: "error" });
        }
      })
      .catch(() =>
        showMessage({
          title: "ユーザー一覧取得に失敗しました",
          status: "error",
        })
      )
      .finally(() => setLoading(false));
  }, [showMessage]);

  return { getUser, loading, users };
};
