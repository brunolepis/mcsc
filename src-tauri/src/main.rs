#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use std::io;
use std::{fs::File, io::Write};

#[tauri::command]
fn download_file(file_path: String, url: String) -> Result<String, ()> {
    let resp = reqwest::blocking::get(url).expect("request failed");
    let body = resp.bytes().expect("body invalid");
    let mut out = File::create(file_path).expect("failed to create file");
    let body_bytes = body.to_vec();
    io::copy(&mut &body_bytes[..], &mut out).expect("failed to copy content");
    Ok("Successfully downloaded".to_string())
}

#[tauri::command]
fn write_file(file_path: String, file_content: String) -> Result<String, ()> {
    let mut file = std::fs::File::create(file_path).expect("create failed");
    file.write_all(file_content.as_bytes())
        .expect("write failed");
    Ok("Successfully created".to_string())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![download_file, write_file])
        .run(tauri::generate_context!())
        .expect("failed to run app");
}
