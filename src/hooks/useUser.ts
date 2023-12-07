import UsersService from '@/services/user';
import { LoginPayload, RegisterPayload } from '@/services/user/schema';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetUser = () => {
  const {
    data: user,
    isLoading: loadingUser,
    error: getUserError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => UsersService.getUser(),
  });

  return {
    user,
    loadingUser,
    getUserError,
  };
};

export const useLogin = () => {
  const {
    mutate: loginUser,
    isPending: loadingLogin,
    error: loginError,
    isSuccess,
    isError,
  } = useMutation<Record<string, unknown>, string, LoginPayload, unknown>({
    mutationFn: (payload: LoginPayload) => UsersService.login(payload),
  });

  return {
    loginUser,
    loadingLogin,
    loginError,
    isSuccess,
    isError,
  };
};

export const useRegister = () => {
  const {
    mutate: registerUser,
    isPending: loadingRegister,
    error: registerError,
    isSuccess,
    isError,
  } = useMutation<Record<string, unknown>, string, RegisterPayload, unknown>({
    mutationFn: (payload: RegisterPayload) => UsersService.register(payload),
  });

  return {
    registerUser,
    loadingRegister,
    registerError,
    isSuccess,
    isError,
  };
};
