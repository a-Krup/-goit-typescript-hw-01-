export const UserRoles = {
  admin: "admin",
  editor: "editor",
  guest: "guest",
} as const;

export type UserRole = keyof typeof UserRoles; // 'admin' | 'editor' | 'guest'

const RoleDescription: Record<UserRole, string> = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.log("Опис ролей:", RoleDescription);
