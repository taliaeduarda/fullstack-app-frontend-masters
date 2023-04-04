"use client";
import { register, signin } from "@/lib/api";
import { use, useCallback, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Card from "./Card";
import Button from "./Button";
import Input from "./Input";

const registerContent = {
  linkUrl: "/signin",
  linkText: "Already have an account?",
  header: "Create a new Account",
  subheader: "Just a few things to get started",
  buttonText: "Register",
};

const signinContent = {
  linkUrl: "/register",
  linkText: "Don't have an account?",
  header: "Welcome Back",
  subheader: "Enter your credentials to access your account",
  buttonText: "Sign In",
};

const initial = { email: "", password: "", firstName: "", lastName: "" };

const AuthForm = ({mode}) => {
const [formState, setFormState] = useState({...initial})
const router = useRouter()

// se nenhuma dessas coisas mudarem, apenas use a mesma função nos proximas renderizações
const handleSubmit = async (e) => {
  e.preventDefault()

  if (mode === 'register') {
    await register(formState)
  }
}
}