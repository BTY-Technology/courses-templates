'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { User, AuthSession } from '@/types'

interface AuthContextType {
  user: User | null
  session: AuthSession | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (name: string, email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  updateUser: (user: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<AuthSession | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Demo mode - no session checking needed
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    // Demo mode - mock login
    setIsLoading(true)
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      const mockUser = {
        id: '1',
        email: email,
        name: email.split('@')[0],
        role: 'student' as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      setUser(mockUser)
      setSession({
        user: mockUser,
        accessToken: 'demo-token',
      })
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (name: string, email: string, password: string) => {
    // Demo mode - mock signup
    setIsLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 500))

      const mockUser = {
        id: '1',
        email: email,
        name: name,
        role: 'student' as const,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      setUser(mockUser)
      setSession({
        user: mockUser,
        accessToken: 'demo-token',
      })
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    // Demo mode - simple logout
    setUser(null)
    setSession(null)
  }

  const updateUser = (updatedUser: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updatedUser })
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isAuthenticated: !!user,
        isLoading,
        login,
        signup,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
