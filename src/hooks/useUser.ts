import UsersService from '@/services/user';
import { LoginPayload, RegisterPayload } from '@/services/user/schema';
import { UserType } from '@/services/user/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

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

export const useLogin = (
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const {
    mutate: loginUser,
    isPending: loadingLogin,
    error: loginError,
    isSuccess,
    isError,
    data: user,
  } = useMutation<Record<string, unknown>, string, LoginPayload, unknown>({
    mutationFn: (payload: LoginPayload) => UsersService.login(payload),
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: (error) => {
      onError && onError(error);
    },
  });

  const queryClient = useQueryClient();

  if (isSuccess) {
    queryClient.fetchQuery({
      queryKey: ['user'],
      queryFn: () => UsersService.getUser(),
    });
  }

  return {
    loginUser,
    user,
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

export const useUpdateUserContactInfo = (
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const {
    mutate: updateUserInfo,
    isPending: loadingUpdateUserInfo,
    error: updateUserInfoError,
    isSuccess,
    data: user,
    isError,
  } = useMutation<UserType, string, Partial<UserType>, unknown>({
    mutationFn: (payload: Partial<UserType>) =>
      UsersService.updateUser(payload),
    onSuccess: (data) => {
      toast.success('Profile updated successfully');
      onSuccess && onSuccess();
    },
    onError: (error) => {
      onError && onError(error);
    },
  });

  return {
    updateUserInfo,
    loadingUpdateUserInfo,
    updateUserInfoError,
    user,
    isSuccess,
    isError,
  };
};
