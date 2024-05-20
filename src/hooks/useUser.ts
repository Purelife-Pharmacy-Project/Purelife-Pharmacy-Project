import { PARTNER_ID_KEY, USER_ID_KEY, USER_TOKEN_KEY } from '@/constants';
import UsersService from '@/services/user';
import { LoginPayload, RegisterPayload } from '@/services/user/schema';
import { UserType } from '@/services/user/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import { toast } from 'sonner';
import { useCartStore } from '@/hooks/store/useCart';

export const useGetUser = () => {
  const {
    data,
    isLoading: loadingUser,
    error: getUserError,
  } = useQuery({
    queryKey: ['user'],
    queryFn: () => UsersService.getUser(),
    enabled: !!UsersService.getUserFromToken()?.id,
  });

  const tempUser = UsersService.getUserFromToken();

  return {
    user: tempUser,
    loadingUser,
    getUserError,
  };
};

export const useGetPartner = () => {
  const {
    data: partner,
    isLoading: loadingPartner,
    error: getPartnerError,
  } = useQuery({
    queryKey: ['partner'],
    queryFn: () => UsersService.getPartner(),
    enabled: !!UsersService.getUserFromToken()?.id,
  });

  return {
    partner,
    loadingPartner,
    getPartnerError,
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
    queryClient.fetchQuery({
      queryKey: ['partner'],
      queryFn: () => UsersService.getPartner(),
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

export const useRegister = (
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const {
    mutate: registerUser,
    isPending: loadingRegister,
    error: registerError,
    isSuccess,
    isError,
  } = useMutation<any, string, RegisterPayload, unknown>({
    mutationFn: (payload: RegisterPayload) => UsersService.register(payload),
    onSuccess: () => {
      onSuccess?.();
    },
    onError: (error) => {
      onError?.(error);
    },
  });

  return {
    registerUser,
    loadingRegister,
    registerError,
    isSuccess,
    isError,
  };
};

export const useChangePassword = (
  onSuccess?: () => void,
  onError?: (error: string) => void
) => {
  const {
    mutate: changePassword,
    isPending: loadingChangePassword,
    error: changePasswordError,
    isSuccess,
    isError,
  } = useMutation({
    mutationFn: (payload: { oldPassword: string; newPassword: string }) =>
      UsersService.changePassword(payload),
    onSuccess: () => {
      toast.success('Password changed successfully');
      onSuccess && onSuccess();
    },
    onError: (error: string) => {
      onError && onError(error);
    },
  });

  return {
    changePassword,
    loadingChangePassword,
    changePasswordError,
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

export const useLogout = () => {
  const queryClient = useQueryClient();

  const { clearCart } = useCartStore();

  const logout = () => {
    UsersService.logoutUser();
    queryClient.removeQueries();
    queryClient.clear();

    deleteCookie(USER_TOKEN_KEY);
    deleteCookie(USER_ID_KEY);
    deleteCookie(PARTNER_ID_KEY);

    clearCart();
  };

  return {
    logout,
  };
};
